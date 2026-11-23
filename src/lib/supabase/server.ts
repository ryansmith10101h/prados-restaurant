import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getSafeCredentials() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const isValid =
    url &&
    (url.startsWith("http://") || url.startsWith("https://")) &&
    !url.includes("your_supabase_project_url");

  return {
    url: isValid ? url : "https://placeholder.supabase.co",
    anonKey:
      anonKey && !anonKey.includes("your_supabase_anon_key")
        ? anonKey
        : "placeholder-anon-key",
    serviceKey:
      serviceKey && !serviceKey.includes("your_supabase_service_role_key")
        ? serviceKey
        : "placeholder-service-key",
  };
}

export async function createClient() {
  const cookieStore = await cookies();
  const { url, anonKey } = getSafeCredentials();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: Array<{ name: string; value: string; options?: any }>) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Server component — cookies can't be set
        }
      },
    },
  });
}

export async function createAdminClient() {
  const cookieStore = await cookies();
  const { url, serviceKey } = getSafeCredentials();

  return createServerClient(url, serviceKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: Array<{ name: string; value: string; options?: any }>) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Server component
        }
      },
    },
  });
}
