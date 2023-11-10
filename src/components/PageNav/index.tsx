import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

import { memo, useCallback } from 'react'

import { clsx } from 'clsx'

import { Button } from '@/components'

const PageNav = ({ pageCount }: { pageCount: number }) => {
  const { page } = useParams() as { page?: string }
  const navigate = useRouter()

  const handleNext = useCallback(() => {
    if (page) {
      const currPage = parseInt(page, 10)
      if (page && currPage < pageCount) navigate.push(`./../${currPage + 1}`)
    }
  }, [navigate, page, pageCount])

  const handlePrev = useCallback(() => {
    if (page) {
      const currPage = parseInt(page, 10)
      if (page && currPage > 1) navigate.push(`./../${currPage - 1}`)
    }
  }, [navigate, page])

  return (
    <div className="flex items-center justify-center gap-x-2">
      <Button
        onClick={handlePrev}
        className="border-darkGray h-7 rounded-md border bg-white px-2 text-black/50"
      >
        Prev
      </Button>
      {[...Array(pageCount)].map((e, val) => {
        const pageVal = val + 1
        return (
          <Link
            key={pageVal}
            href={`./../${pageVal}`}
            className={clsx('rounded px-1 font-semibold', {
              'border-heavyGray border text-black': `${pageVal}` === page,
              'text-black/50': `${pageVal}` !== page
            })}
          >
            {pageVal}
          </Link>
        )
      })}
      <Button
        onClick={handleNext}
        className="border-darkGray h-7 rounded-md border bg-white px-2 text-black/50"
      >
        Next
      </Button>
    </div>
  )
}

export default memo(PageNav)
