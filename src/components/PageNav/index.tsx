'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

import { memo, useCallback } from 'react'

import { Button } from '@/components'
import { cn } from '@/utils/cn'

const PageNav = ({ pageCount }: { pageCount: number }) => {
  const { page } = useParams() || { page: null }
  const navigate = useRouter()

  const handleNext = useCallback(() => {
    if (typeof page === 'string') {
      const currPage = parseInt(page, 10)
      if (page && currPage < pageCount) navigate.push(`./../${currPage + 1}`)
    }
  }, [navigate, page, pageCount])

  const handlePrev = useCallback(() => {
    if (typeof page === 'string') {
      const currPage = parseInt(page, 10)
      if (page && currPage > 1) navigate.push(`./../${currPage - 1}`)
    }
  }, [navigate, page])

  return (
    <div className="flex items-center justify-center gap-x-2">
      <Button
        onClick={handlePrev}
        className="h-7 rounded-md border border-darkGray bg-white px-2 text-black/50"
      >
        Prev
      </Button>
      {[...Array(pageCount)].map((e, val) => {
        const pageVal = val + 1
        return (
          <Link
            key={pageVal}
            href={`./../${pageVal}`}
            className={cn('rounded px-1 font-semibold', {
              'border border-heavyGray text-black': `${pageVal}` === page,
              'text-black/50': `${pageVal}` !== page
            })}
          >
            {pageVal}
          </Link>
        )
      })}
      <Button
        onClick={handleNext}
        className="h-7 rounded-md border border-darkGray bg-white px-2 text-black/50"
      >
        Next
      </Button>
    </div>
  )
}

export default memo(PageNav)
