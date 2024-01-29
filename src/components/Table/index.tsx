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
              '-ml-4 w-full rounded-full px-4 py-1.5 text-sm font-bold shadow-md',
              {
                'bg-green/10 text-darkGreen/60': val === 'OPEN',
                'bg-red/5 text-red/90': val === 'CLOSED',
                'bg-loadBlue/10 text-loadBlue/90': val === 'WATER-SAMPLE',
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
    if (val === undefined || val === null) return '----'
    return `${val}`
  }

  const rowList = useMemo(
    () =>
      rows.map((row, idx) => (
        <tr
          onClick={() => onRowSelect && onRowSelect(row)}
          key={idx}
          className={cn(
            'border-y border-black/5 pr-2 transition duration-300 ease-in-out last:border-b-0 even:bg-loadBlue/5',
            {
              '!bg-loadBlue/20 hover:bg-loadBlue/40':
                selectedRow === row.id?.toString(),
              'cursor-pointer hover:bg-black/5 hover:shadow-xl': onRowSelect
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
