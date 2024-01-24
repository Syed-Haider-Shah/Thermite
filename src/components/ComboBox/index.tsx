import { ChangeEvent, ForwardedRef, useCallback, useRef, useState } from 'react'

import debounce from 'lodash.debounce'

import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import ComboInput from './ComboInput'
import DropList from './DropList'

type IComboBox = {
  items: IRow[]
  title: string
  placeholder?: string
  ref?: ForwardedRef<HTMLInputElement>
  field: string
  isLoading?: boolean
  className?: string
  onSelect?: (val: string) => void
  onSearch?: (val: string) => void
}

const ComboBox = ({
  items,
  title,
  placeholder,
  field,
  isLoading,
  ref,
  className,
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
      className={cn(
        'group relative right-0 mt-2 w-full min-w-[14.5rem] -translate-y-1 space-y-1 rounded-md',
        className
      )}
    >
      <ComboInput
        id="ticket-name"
        title={title}
        ref={ref}
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
      />
      <DropList
        field={field}
        items={items}
        isLoading={isLoading}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default ComboBox
