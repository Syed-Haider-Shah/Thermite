import { FC, memo, useMemo } from 'react'

import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import RowSkeleton from './RowSkeleton'

type ITable = {
  rows: IRow[]
  onRowSelect?: (row: IRow) => void
  cols: { field: string; name: string; isDate?: boolean }[]
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
  const handleRowValue = (
    val: string | number | boolean | string[] | null | undefined,
    field: string,
    isDate?: boolean
  ) => {
    if (isDate) return new Date(`${val}`).toDateString()
    switch (field) {
      case 'status':
        return (
          <span
            className={cn(
              '-ml-4 w-full rounded-full px-4 py-1.5 text-sm font-bold',
              {
                'bg-green/5 text-darkGreen/60': val === 'OPEN',
                'bg-red/5 text-red/90': val === 'CLOSED',
                'bg-indigo/10 text-indigo/90': val === 'WATER-SAMPLE',
                'bg-loadOrange/20 text-loadOrange': val === 'PARTS'
              }
            )}
          >
            {val}
          </span>
        )
      case 'role':
        switch (val) {
          case 'admin':
            return 'Admin'
          case 'superuser':
            return 'Site Superviser'
          case 'user':
            return 'Employee'
        }
    }
    if (!val) return '----'
    return `${val}`
  }

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
          {cols.map(({ field, isDate }) => (
            <td className="py-4 pl-4" key={field}>
              {handleRowValue(row[field], field, isDate)}
            </td>
          ))}
        </tr>
      )),
    [cols, onRowSelect, rows, selectedRow]
  )

  return (
    <div className="scrollbar-primary relative h-full max-h-[calc(100%-108px)] min-h-sm overflow-auto rounded-md border border-black/5 pb-2">
      <table className="h-min min-w-full divide-y">
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
        <tbody className="border-black/5">
          {isLoading ? (
            <>
              <RowSkeleton cols={cols} />
              <RowSkeleton cols={cols} />
              <RowSkeleton cols={cols} />
            </>
          ) : (
            rowList
          )}
        </tbody>
      </table>
    </div>
  )
}

export default memo(TableComponent)
