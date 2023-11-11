import { cookies } from 'next/headers'

import { type CookieOptions, createServerClient } from '@supabase/ssr'

import { Database } from '@/types/supabase'

export const createClient = () => {
  const cookieStore = cookies()
  return createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore?.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore?.delete({ name, ...options })
        }
      }
    }
  )
}

export const supabase = createClient()
