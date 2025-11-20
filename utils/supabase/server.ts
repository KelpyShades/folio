import { createServerClient } from '@supabase/ssr';
import type { cookies } from 'next/headers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  return createServerClient(supabaseUrl as string, supabaseKey as string, {
    cookies: {
      async getAll() {
        return (await cookieStore).getAll();
      },
      async setAll(cookiesToSet) {
        try {
          await cookiesToSet.forEach(async ({ name, value, options }) =>
            (await cookieStore).set(name, value, options)
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};
