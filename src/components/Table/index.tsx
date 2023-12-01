import { FC, useMemo } from 'react'

import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import Spinner from '../Icons/Spinner'
import SortableColumn from './SortableColumn'

type ITable = {
  rows: IRow[]
  onRowSelect?: (row: IRow) => void
  cols: { field: string; name: string }[]
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
            'cursor-pointer border-y border-black/5 transition-colors last:border-b-0 even:bg-indigo/5 hover:bg-black/5',
            {
              '!bg-indigo/30 hover:bg-indigo/40':
                selectedRow === row.id?.toString()
            }
          )}
        >
          {cols.map(({ field }) => (
            <td className="py-3 pl-4 text-sm" key={field}>
              {row[field]}
            </td>
          ))}
        </tr>
      )),
    [cols, onRowSelect, rows, selectedRow]
  )

  return (
    <div className="scrollbar-primary relative max-h-[calc(100%-108px)] min-h-sm overflow-auto rounded-md ring-1 ring-black/5 ">
      <table className="h-full min-w-full divide-y">
        <thead className="sticky top-0 z-10 bg-darkIndigo bg-opacity-100">
          <tr>
            {cols.map((val) => (
              <SortableColumn key={val.field} field={val.field}>
                {val.name}
              </SortableColumn>
            ))}
          </tr>
        </thead>
        <tbody className="border-black/5">{rowList}</tbody>
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
