import { FC } from 'react'

import { clsx } from 'clsx'

import { MagnifierIcon } from '@/components'

type ISearch = {
  onFocus?: () => void
  onBlur?: () => void
  placeholder?: string
  isSearchFocused?: boolean
}

const SearchComponent: FC<ISearch> = ({
  placeholder,
  onFocus,
  onBlur,
  isSearchFocused
}) => {
  return (
    <div className="relative flex h-12 items-center overflow-hidden rounded-full border border-white/5 bg-black/5">
      <input
        title="Search bar"
        type="text"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={clsx(
          'w-full bg-transparent pr-4 text-base font-medium leading-4 outline-none transition-all duration-300 placeholder:text-sm',
          {
            'pl-11': !isSearchFocused,
            'pl-4': isSearchFocused
          }
        )}
      />
      <div
        className={clsx('absolute text-black/40 transition-all duration-300', {
          'left-4 opacity-100': !isSearchFocused,
          'left-0 opacity-0': isSearchFocused
        })}
      >
        <MagnifierIcon className="h-4 w-4" />
      </div>
    </div>
  )
}

export default SearchComponent
