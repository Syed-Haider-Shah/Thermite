import { usePathname, useRouter } from 'next/navigation'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { Session } from '@supabase/supabase-js'

import Spinner from '@/components/Icons/Spinner'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { IEmployee, INITIAL_EMPLOYEE_DATA } from '@/types/supabaseTables'

const AuthContext = createContext<{
  session: Session | null
  user: IEmployee
  signOut: () => void
}>({
  session: null,
  user: INITIAL_EMPLOYEE_DATA,
  signOut: () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<IEmployee>(INITIAL_EMPLOYEE_DATA)
  const [isLoading, setIsLoading] = useState(true)

  const pathname = usePathname()
  const router = useRouter()

  const fetchData = useCallback(async () => {
    if (session) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    const { data, error } = await supabase.auth.getSession()

    if (error) throw error

    // route protection
    if (!data.session) {
      if (pathname !== Paths.INDEX) router.push(Paths.INDEX)
      else setIsLoading(false)
      return
    } else if (pathname === Paths.INDEX) {
      router.push(Paths.HOME)
      return
    } else {
      const { data: empData } = await supabase
        .from('employees')
        .select()
        .eq('id', data.session.user.id)
        .single()

      if (empData) setUser({ ...empData, email: data.session.user.email })
    }

    setSession(data.session)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, router])

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_, sesh) => {
      setSession(sesh)
    })

    fetchData()

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [pathname, router, fetchData])

  const value = useMemo(
    () => ({
      session,
      user,
      signOut: () => {
        supabase.auth.signOut()
        router.push(Paths.INDEX)
      }
    }),
    [router, session, user]
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
