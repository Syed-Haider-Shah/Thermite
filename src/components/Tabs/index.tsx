import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { FC, memo, ReactNode, useCallback, useEffect } from 'react'

import classNames from 'classnames'

type ITabs = {
  tabs: string[]
  children: ReactNode
}

const Tabs: FC<ITabs> = ({ tabs, children }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const tab = searchParams.get('tab')

  const handleRoute = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    params.set('tab', tabs[0])
  }, [searchParams, tabs])

  useEffect(() => {
    handleRoute()
  }, [handleRoute])

  return (
    <div className="h-full w-full px-9 space-y-5 mt-10">
      <div className="flex space-x-7 border-b h-min border-white/10 text-2xl">
        {tabs.map((value: string) => (
          <Link
            href={{
              pathname,
              query: { tab: value }
            }}
            key={value}
            className={classNames(
              'border-b-4 text-lg font-semibold tracking-wide',
              {
                'border-black/90 text-black/90 transition-all ease-in-out':
                  tab === value,
                'border-transparent text-black/60': tab !== value
              }
            )}
          >
            {value}
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}

export default memo(Tabs)
