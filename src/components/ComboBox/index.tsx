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
  const [isFocused, setIsFocused] = useState<boolean>(false)

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
      console.log(val[field])
      setSearch(val[field] as string)
      if (onSelect) onSelect(val['id'] as string)
    },
    [field, onSelect]
  )

  return (
    <div
      id="dropdown-menu"
      onFocus={() => setIsFocused(true)}
      className={cn(
        'group relative mt-2 h-12 w-full -translate-y-1 rounded-md',
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
        showList={isFocused}
        items={items}
        isLoading={isLoading}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default ComboBox
