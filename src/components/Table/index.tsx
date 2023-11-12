import { FC } from 'react'

import SortableColumn from './SortableColumn'

type ITable = {
  rows: { [key: string]: string | number | null }[]
  cols: { field: string; name: string }[]
}

const TableComponent: FC<ITable> = ({ rows, cols }) => {
  return (
    <div className="scrollbar-primary max-h-md overflow-y-scroll rounded-lg ring-1 ring-black/5 ">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50">
          <tr className="bg-lightGray">
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
        <tbody className="bg-white">
          {rows.map((row) => (
            <tr
              key={row.id}
              className="cursor-pointer border-y border-black/5 transition-colors even:bg-golden/20 hover:bg-black/5"
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
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
