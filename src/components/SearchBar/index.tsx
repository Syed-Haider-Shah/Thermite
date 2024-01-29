import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import debounce from 'lodash.debounce'

import { MagnifierIcon } from '@/components'

interface ISearchBar extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  title?: string
  placeholder?: string
  value?: string
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onSearch: (text: string) => void
}

const SearchComponent: FC<ISearchBar> = ({
  id,
  title,
  placeholder,
  required,
  disabled,
  onKeyDown,
  onSearch,
  ...restProps
}) => {
  const debouncedFn = useRef(debounce(onSearch, 500)).current
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [search, setSearch] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('page')
    router.push(`${pathname}?${newParams.toString()}`)
    setSearch(event.target.value)
  }

  const handleSearch = useCallback(() => {
    debouncedFn(search)
  }, [debouncedFn, search])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <label
      htmlFor={id}
      title={'Search Bar'}
      className="relative flex h-12 items-center overflow-hidden rounded-full border border-white/5 bg-black/5"
    >
      <input
        {...restProps}
        title="Search Bar"
        type="text"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={search}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        aria-label={title}
        className={
          'peer w-full bg-transparent pl-11 pr-4 text-base font-medium leading-4 outline-none transition-all duration-300 placeholder:text-sm focus:pl-4'
        }
      />
      <div
        className={
          'absolute left-4 text-black/40 opacity-100 transition-all duration-300 peer-focus:left-0 peer-focus:opacity-0'
        }
      >
        <MagnifierIcon className="h-4 w-4" />
      </div>
    </label>
  )
}

export default memo(SearchComponent)
