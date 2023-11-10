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
  const [sortField, asc] = searchParams.get('sort')?.split(':') ?? []
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

type ITable = {
  rows: { id: string; [key: string]: string }[]
  fields: { field: string; name: string }[]
  onRowSelect: (row: { id: string; [key: string]: string }) => void
}

const TableComponent: FC<ITable> = ({ rows, fields, onRowSelect }) => {
  return (
    <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr className="bg-lightGray">
            <th
              scope="col"
              className="px-3 py-3.5 text-left font-semibold leading-5 text-black/50 first:pl-4 first:sm:pl-6"
            >
              <input title="checkbox" type="checkbox" defaultValue={0} />
            </th>
            {fields.map((val) => (
              <SortableColumn key={val.field} field={val.field}>
                {val.name}
              </SortableColumn>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((data) => (
            <tr
              key={data.id}
              onClick={() => onRowSelect(data)}
              className="even:bg-golden/20 cursor-pointer border-y border-black/5 transition-colors hover:bg-black/5"
            >
              <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                <input title="checkbox" type="checkbox" defaultValue={0} />
              </td>
              {fields.map(({ field }) => (
                <td className="py-3 pl-4 text-sm text-gray-500" key={field}>
                  {data[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
