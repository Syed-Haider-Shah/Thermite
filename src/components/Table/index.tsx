import { FC, memo, useMemo } from 'react'

import { Gear } from '@/components'
import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

type ITable = {
  rows: IRow[]
  onRowSelect?: (row: IRow) => void
  cols: { field: string; name: string; isData?: boolean }[]
  selectedRow?: string
  isLoading?: boolean
}

const TableComponent: FC<ITable> = ({
  rows,
  cols,
  isLoading,
  onRowSelect,
  selectedRow
}) => {
  const rowList = useMemo(
    () =>
      rows.map((row, idx) => (
        <tr
          onClick={() => onRowSelect && onRowSelect(row)}
          key={idx}
          className={cn(
            'cursor-pointer border-y border-black/5 transition duration-300 ease-in-out last:border-b-0 even:bg-indigo/5 hover:bg-black/5 hover:shadow-xl',
            {
              '!bg-indigo/30 hover:bg-indigo/40':
                selectedRow === row.id?.toString()
            }
          )}
        >
          {cols.map(({ field }) => (
            <td className="py-4 pl-4" key={field}>
              {row[field]}
            </td>
          ))}
        </tr>
      )),
    [cols, onRowSelect, rows, selectedRow]
  )

  return (
    <div className="scrollbar-primary relative max-h-[calc(100%-108px)] min-h-sm overflow-auto rounded-md ring-1 ring-black/5">
      <table className="h-full min-w-full divide-y">
        <thead className="sticky top-0 z-10 bg-darkIndigo bg-opacity-100">
          <tr>
            {cols.map((val) => (
              <th
                key={val.field}
                scope="col"
                className="px-3 py-3.5 text-left font-semibold leading-5 text-white first:pl-4 first:sm:pl-6"
              >
                {val.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border-black/5">{rowList}</tbody>
      </table>
      {isLoading && (
        <div className="absolute left-1/2 top-1/2">
          <Gear className="animate-spin" />
        </div>
      )}
    </div>
  )
}

export default memo(TableComponent)
