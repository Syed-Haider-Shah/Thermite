import Skeleton from 'react-loading-skeleton'

const RowSkeleton = ({
  cols
}: {
  cols: { field: string; name: string; isDate?: boolean }[]
}) => (
  <tr>
    {cols.map(({ field }) => (
      <td key={field} className="border-b border-black/5 py-3.5 pl-2 pr-8">
        <Skeleton />
      </td>
    ))}
  </tr>
)

export default RowSkeleton
