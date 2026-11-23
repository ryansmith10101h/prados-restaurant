"use client";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const safeUrl =
    url &&
    (url.startsWith("http://") || url.startsWith("https://")) &&
    !url.includes("your_supabase_project_url")
      ? url
      : "https://placeholder.supabase.co";

  const safeAnonKey =
    anonKey && !anonKey.includes("your_supabase_anon_key")
      ? anonKey
      : "placeholder-anon-key";

  return createBrowserClient(safeUrl, safeAnonKey);
}
