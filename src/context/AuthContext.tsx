import { usePathname, useRouter } from 'next/navigation'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { Session } from '@supabase/supabase-js'

import Spinner from '@/components/Icons/Spinner'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'

const AuthContext = createContext<{
  session: Session | null
  signOut: () => void
}>({
  session: null,
  signOut: () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const setData = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) throw error

      // route protection
      if (!data.session)
        if (pathname !== Paths.INDEX) router.push(Paths.INDEX)
        else return
      else if (pathname === Paths.INDEX) router.push(Paths.HOME)

      setSession(data.session)
      setIsLoading(false)
    }

    const { data: listener } = supabase.auth.onAuthStateChange((_, sesh) => {
      setSession(sesh)
      setIsLoading(false)
    })

    setData()

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [pathname, router])

  const value = useMemo(
    () => ({
      session,
      signOut: () => {
        supabase.auth.signOut()
        router.push(Paths.INDEX)
      }
    }),
    [router, session]
  )

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {isLoading ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

// export the useAuth hook
export const useAuth = () => useContext(AuthContext)
