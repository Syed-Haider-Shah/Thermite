import { FC, useMemo } from 'react'

import Spinner from '../Icons/Spinner'
import SortableColumn from './SortableColumn'

type ITable = {
  rows: { [key: string]: string | number | string[] | boolean | null }[]
  cols: { field: string; name: string }[]
  isLoading?: boolean
}

const TableComponent: FC<ITable> = ({ rows, cols, isLoading }) => {
  const rowList = useMemo(
    () =>
      rows.map((row, idx) => (
        <tr
          key={idx}
          className="cursor-pointer border-y border-black/5 transition-colors last:border-b-0 even:bg-golden/20 hover:bg-black/5"
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
    [cols, rows]
  )

  return (
    <div className="scrollbar-primary min-h-sm max-h-[calc(100%-108px)] overflow-hidden overflow-y-auto rounded-lg ring-1 ring-black/5 ">
      <table className="h-full min-w-full divide-y">
        <thead className="sticky top-0 bg-lightGray">
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
        <tbody className="relative border-black/5">
          {isLoading && (
            <div className="absolute left-1/2 top-1/2">
              <Spinner />
            </div>
          )}
          {rowList}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
