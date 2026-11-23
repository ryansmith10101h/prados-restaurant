import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

function isValidSupabaseUrl(url?: string): url is string {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return (
      (parsed.protocol === "http:" || parsed.protocol === "https:") &&
      !url.includes("your_supabase_project_url")
    );
  } catch {
    return false;
  }
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const pathname = request.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login" || pathname.startsWith("/admin/login/");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If Supabase environment variables are missing or placeholders, fail gracefully
  if (
    !isValidSupabaseUrl(supabaseUrl) ||
    !supabaseAnonKey ||
    supabaseAnonKey.includes("your_supabase_anon_key")
  ) {
    if (isAdminRoute && !isLoginPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    return supabaseResponse;
  }

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet: Array<{ name: string; value: string; options?: any }>) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            supabaseResponse = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // Only verify user authentication when accessing protected admin routes
    if (isAdminRoute && !isLoginPage) {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        const url = request.nextUrl.clone();
        url.pathname = "/admin/login";
        return NextResponse.redirect(url);
      }
    }

    return supabaseResponse;
  } catch (error) {
    console.error("Middleware session update error:", error);

    if (isAdminRoute && !isLoginPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    return NextResponse.next({ request });
  }
}
