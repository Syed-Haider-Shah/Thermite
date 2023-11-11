'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { FC, ReactNode } from 'react'

import { DownArrowIcon } from '@/components'

type ISortableColumn = {
  field: string
  children: ReactNode
}

const SortableColumn: FC<ISortableColumn> = ({ field, children }) => {
  const searchParams = useSearchParams()
  const [sortField, asc] = searchParams?.get('sort')?.split(':') ?? []
  let newSort = ''

  if (sortField !== field) {
    newSort = field
  } else if (sortField === field && !asc) {
    newSort = `${field}:asc`
  }

  const newSearchParams = new URLSearchParams({ sort: newSort })

  return (
    <th
      scope="col"
      className="px-3 py-3.5 text-left font-semibold leading-5 text-black/50 first:pl-4 first:sm:pl-6"
    >
      <Link
        href={newSort === '' ? './' : `./?${newSearchParams}`}
        className="group inline-flex items-center gap-x-1 whitespace-nowrap"
      >
        {children}
        <DownArrowIcon
          className={`${asc && sortField === field && 'rotate-180'}`}
          color={`${sortField === field ? '#456BF0' : '#7C7C7C'}`}
          aria-hidden="true"
        />
      </Link>
    </th>
  )
}

export default SortableColumn
