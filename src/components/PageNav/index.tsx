import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { memo, useCallback } from 'react'

import { cn } from '@/utils/cn'

const PageNav = ({ pageCount }: { pageCount: number }) => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || '1'
  const pathname = usePathname()

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

    if (pageNum >= pageCount) newParams.set('page', `${pageNum}`)
    else if (pageNum && pageNum > 1) newParams.set('page', `${pageNum + 1}`)
    else newParams.set('page', '2')

    return newParams.toString()
  }, [page, pageCount, searchParams])

  const handlePrev = useCallback(() => {
    const newParams = new URLSearchParams(searchParams)
    const pageNum = Number(page)

    if (pageNum && pageNum > 1 && pageNum <= pageCount)
      newParams.set('page', `${pageNum - 1}`)
    else newParams.set('page', '1')

    return newParams.toString()
  }, [page, pageCount, searchParams])

  return (
    <div className="flex items-center justify-center gap-x-2 shadow-md">
      <Link
        href={{
          pathname,
          query: handlePrev()
        }}
        className="h-7 rounded-md border border-darkGray bg-white px-2 pt-0.5 text-black/50"
      >
        Prev
      </Link>
      {[...Array(pageCount)].map((e, val) => {
        const pageVal = val + 1
        return (
          <Link
            key={pageVal}
            href={{
              pathname,
              query: handlePageSelect(pageVal)
            }}
            className={cn('rounded px-1 pt-1 font-semibold', {
              'border border-darkGray text-black': `${pageVal}` === page,
              'text-black/50': `${pageVal}` !== page
            })}
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
        className="h-7 rounded-md border border-darkGray bg-white px-2 pt-0.5 text-black/50"
      >
        Next
      </Link>
    </div>
  )
}

export default memo(PageNav)
