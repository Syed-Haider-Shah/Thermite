import { ChangeEvent, useCallback, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import debounce from 'lodash.debounce'

import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import FormLine from '../FormLine'

type IComboBox = {
  items: IRow[]
  title: string
  placeholder?: string
  field: string
  isLoading?: boolean
  onSelect?: (val: string) => void
  onSearch?: (val: string) => void
}

const ComboBox = ({
  items,
  title,
  placeholder,
  field,
  isLoading,
  onSelect,
  onSearch
}: IComboBox) => {
  const [search, setSearch] = useState<string>('')

  const debouncedFn = useRef(
    debounce(onSearch ? onSearch : () => {}, 500)
  ).current

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
      debouncedFn(event.target.value)
    },
    [debouncedFn]
  )

  const handleSelect = useCallback(
    (val: IRow) => {
      setSearch(val[field] as string)
      if (onSelect) onSelect(val['id'] as string)
    },
    [field, onSelect]
  )

  return (
    <div
      id="dropdown-menu"
      className="bg-whit relative right-0 mt-2 w-full space-y-1 rounded-md"
    >
      <fieldset
        className={cn(
          'box-border rounded-lg border-4',
          'border-loadGray focus-within:border-loadBlue'
        )}
      >
        <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
          {title}
        </div>
        <FormLine
          id="ticket"
          placeholder={placeholder}
          value={search}
          cusForm
          onChange={handleChange}
        />
      </fieldset>
      <ul
        className={cn(
          'absolute z-10 w-[calc(100%-10px)] overflow-hidden rounded-md border border-black/10 bg-white',
          { 'border-0': items.length < 1 && !isLoading }
        )}
      >
        {items.map((item) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            onClick={() => {
              handleSelect(item)
            }}
            key={`${item}`}
            className="block cursor-pointer border-b border-black/5 px-4 py-2 last:border-b-0 hover:bg-black/10"
          >
            {item[field]}
          </li>
        ))}
        {isLoading && (
          <li className="block cursor-pointer border-b border-black/5 px-4 py-2 last:border-b-0 hover:bg-black/10">
            <Skeleton className="" />
            <Skeleton className="" />
          </li>
        )}
      </ul>
    </div>
  )
}

export default ComboBox
