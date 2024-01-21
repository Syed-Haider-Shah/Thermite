import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { memo, useCallback } from 'react'

import { cn } from '@/utils/cn'

const PageNav = ({ pageCount }: { pageCount: number }) => {
  const count = pageCount > 0 ? Math.ceil(pageCount / 15) : 1

  const searchParams = useSearchParams()
  const page = searchParams.get('page') || '1'
  const pathname = usePathname()
  const x = Number(page) + 2 > count ? Number(page) + 2 - count : 0
  const start = Number(page) > 3 ? Number(page) - 2 - x : 1

  const handlePageSelect = useCallback(
    (val: number) => {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('page', `${val}`)
      return newParams.toString()
    },
    [searchParams]
  )

  const handleNext = useCallback(() => {
    const newParams = new URLSearchParams(searchParams)
    const pageNum = Number(page)

    if (pageNum >= count) newParams.set('page', `${pageNum}`)
    else if (pageNum && pageNum > 1) newParams.set('page', `${pageNum + 1}`)
    else newParams.set('page', '2')

    return newParams.toString()
  }, [page, count, searchParams])

  const handlePrev = useCallback(() => {
    const newParams = new URLSearchParams(searchParams)
    const pageNum = Number(page)

    if (pageNum && pageNum > 1 && pageNum <= count)
      newParams.set('page', `${pageNum - 1}`)
    else newParams.set('page', '1')

    return newParams.toString()
  }, [page, count, searchParams])

  return (
    <div className="flex items-center justify-center gap-x-2 shadow-md">
      <Link
        href={{
          pathname,
          query: handlePrev()
        }}
        className=" rounded-5 p-2 px-4 text-sm text-black/50 transition-all duration-75 hover:bg-gray/20"
      >
        PREV
      </Link>
      {[...Array(count > 5 ? 5 : count)].map((e, val) => {
        const pageVal = val + start
        return (
          <Link
            key={pageVal}
            href={{
              pathname,
              query: handlePageSelect(pageVal)
            }}
            className={cn(
              ' rounded-5 p-2 px-4 text-sm text-black/50 transition-all duration-75 hover:bg-gray/20',
              {
                'bg-gradient-to-tr from-darkIndigo to-darkIndigo/90 text-white hover:bg-darkIndigo/80':
                  `${pageVal}` === page
              }
            )}
          >
            {pageVal}
          </Link>
        )
      })}
      <Link
        href={{
          pathname,
          query: handleNext()
        }}
        className=" rounded-5 p-2 px-4 text-sm text-black/50 transition-all duration-75 hover:bg-gray/20"
      >
        NEXT
      </Link>
    </div>
  )
}

export default memo(PageNav)
