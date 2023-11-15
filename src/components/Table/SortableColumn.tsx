'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { FC, ReactNode, useCallback } from 'react'

import { DownArrowIcon } from '@/components'

type ISortableColumn = {
  field: string
  children: ReactNode
}

const SortableColumn: FC<ISortableColumn> = ({ field, children }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [sortField, asc] = searchParams?.get('sort')?.split(':') ?? []
  let newSort = ''

  if (sortField !== field) {
    newSort = field
  } else if (sortField === field && !asc) {
    newSort = `${field}:asc`
  }

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', newSort)
    return params.toString()
  }, [newSort, searchParams])

  return (
    <th
      scope="col"
      className="px-3 py-3.5 text-left font-semibold leading-5 text-white first:pl-4 first:sm:pl-6"
    >
      <Link
        href={`${pathname}?${createQueryString()}`}
        className="group inline-flex items-center gap-x-1 whitespace-nowrap"
      >
        {children}
        <DownArrowIcon
          className={`${asc && sortField === field && 'rotate-180'}`}
          color={`${sortField === field ? '#456BF0' : '#FFFFFF'}`}
          aria-hidden="true"
        />
      </Link>
    </th>
  )
}

export default SortableColumn
