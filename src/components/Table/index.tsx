import { memo, useMemo } from 'react'

type ITable = {
  cols: string[]
  rows: {
    [val: string]: string
  }[]
}

const Table = ({ cols, rows }: ITable) => {
  const rowList = useMemo(
    () =>
      rows.map((row, idx) => (
        <tr
          key={idx}
          className="border-b border-black/10 last:border-b-0 text-black/60 font-bold"
        >
          {Object.keys(row).map((val) => (
            <td key={val} className="px-6 py-4">
              {row[val]}
            </td>
          ))}
        </tr>
      )),
    [rows]
  )

  return (
    <table className="w-full text-sm text-left">
      <thead className="text-sm uppercase font-medium border-b-2 border-black/10 pt-6 pb-3">
        <tr>
          {cols.map((col) => (
            <th key={col} scope="col" className="px-6 py-3">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rowList}</tbody>
    </table>
  )
}

export default memo(Table)
