import Skeleton from 'react-loading-skeleton'

import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

type IDropList = {
  isLoading?: boolean
  items: IRow[]
  showList?: boolean
  field: string
  onSelect?: (val: IRow) => void
}

const DropList = ({
  isLoading,
  items,
  field,
  onSelect,
  showList
}: IDropList) => {
  const handleSelect = (val: IRow) => {
    console.log(val)
    if (onSelect) onSelect(val)
  }

  return (
    <ul
      className={cn(
        'absolute max-h-0 w-full translate-y-1 overflow-hidden rounded-md border-black/10 bg-white shadow-lg',
        {
          'max-h-48 border': showList,
          'border-0': items.length < 1 && !isLoading
        }
      )}
    >
      {items.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          onClick={() => {
            handleSelect(item)
          }}
          key={`${item['id']}`}
          className="block cursor-pointer border-b border-black/5 px-4 py-2 last:border-b-0 hover:bg-black/10"
        >
          {item[field]}
        </li>
      ))}
      {isLoading && (
        <li className="block cursor-pointer border-b border-black/5 px-4 py-2 last:border-b-0 hover:bg-black/10">
          <Skeleton />
          <Skeleton />
        </li>
      )}
    </ul>
  )
}
export default DropList
