import { FC, useMemo } from 'react'

import { IRow } from '@/types/supabaseTables'

import Spinner from '../Icons/Spinner'
import SortableColumn from './SortableColumn'

type ITable = {
  rows: IRow[]
  onRowSelect?: (row: IRow) => void
  cols: { field: string; name: string }[]
  isLoading?: boolean
}

const TableComponent: FC<ITable> = ({ rows, cols, isLoading, onRowSelect }) => {
  const rowList = useMemo(
    () =>
      rows.map((row, idx) => (
        <tr
          onClick={() => onRowSelect && onRowSelect(row)}
          key={idx}
          className="even:bg-indigo/5 cursor-pointer border-y border-black/5 transition-colors last:border-b-0 hover:bg-black/5"
        >
          <td className="text-gray-900 whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium sm:pl-6">
            <input title="checkbox" type="checkbox" defaultValue={0} />
          </td>
          {cols.map(({ field }) => (
            <td className="py-3 pl-4 text-sm" key={field}>
              {row[field]}
            </td>
          ))}
        </tr>
      )),
    [cols, onRowSelect, rows]
  )

  return (
    <div className="scrollbar-primary relative max-h-[calc(100%-108px)] min-h-sm overflow-auto rounded-lg ring-1 ring-black/5 ">
      <table className="h-full min-w-full divide-y">
        <thead className="sticky top-0 z-10 bg-lightGray bg-opacity-100">
          <tr>
            <th
              scope="col"
              className="px-3 py-3.5 text-left font-semibold leading-5 text-black/50 first:pl-4 first:sm:pl-6"
            >
              <input title="checkbox" type="checkbox" defaultValue={0} />
            </th>
            {cols.map((val) => (
              <SortableColumn key={val.field} field={val.field}>
                {val.name}
              </SortableColumn>
            ))}
          </tr>
        </thead>
        <tbody className="relative border-black/5">{rowList}</tbody>
      </table>
      {isLoading && (
        <div className="absolute left-1/2 top-1/2">
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default TableComponent
