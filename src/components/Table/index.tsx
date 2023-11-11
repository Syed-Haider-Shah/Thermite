import Link from 'next/link'

import { FC, ReactNode } from 'react'

import { DownArrowIcon } from '@/components'

type ISortableColumn = {
  field: string
  searchParams?: { [key: string]: string | undefined }
  children: ReactNode
}

const SortableColumn: FC<ISortableColumn> = ({
  field,
  searchParams,
  children
}) => {
  const [sortField, asc] = searchParams?.sort?.split(':') ?? []
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
  cols: { field: string; name: string }[]
  searchParams?: { [key: string]: string | undefined }
}

const TableComponent: FC<ITable> = ({ rows, cols, searchParams }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
      <table className="divide-gray-300 min-w-full divide-y">
        <thead className="bg-gray-50">
          <tr className="bg-lightGray">
            <th
              scope="col"
              className="px-3 py-3.5 text-left font-semibold leading-5 text-black/50 first:pl-4 first:sm:pl-6"
            >
              <input title="checkbox" type="checkbox" defaultValue={0} />
            </th>
            {cols.map((val) => (
              <SortableColumn
                searchParams={searchParams}
                key={val.field}
                field={val.field}
              >
                {val.name}
              </SortableColumn>
            ))}
          </tr>
        </thead>
        <tbody className="divide-gray-200 divide-y bg-white">
          {rows.map((data) => (
            <tr
              key={data.id}
              className="cursor-pointer border-y border-black/5 transition-colors even:bg-golden/20 hover:bg-black/5"
            >
              <td className="text-gray-900 whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium sm:pl-6">
                <input title="checkbox" type="checkbox" defaultValue={0} />
              </td>
              {cols.map(({ field }) => (
                <td className="text-gray-500 py-3 pl-4 text-sm" key={field}>
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
