import { useCallback, useState } from 'react'

import classNames from 'classnames'

import { Magnifier } from '@/components'

type ISearch = {
  placeholder?: string
  className?: string
}

const SearchBar = ({ placeholder, className }: ISearch) => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false)

  const handleFocus = useCallback(() => {
    setIsSearchFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsSearchFocused(false)
  }, [])

  return (
    <div
      className={classNames(
        'relative flex h-full items-center overflow-hidden rounded-full border border-white/5 bg-[#F4F7FC]',
        className
      )}
    >
      <input
        title="Search bar"
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={classNames(
          'w-full bg-transparent pr-4 text-base font-medium leading-4 outline-none transition-all duration-300 placeholder:text-sm',
          {
            'pl-11': !isSearchFocused,
            'pl-4': isSearchFocused
          }
        )}
      />
      <div
        className={classNames(
          'absolute text-black/40 transition-all duration-300',
          {
            'left-4 opacity-100': !isSearchFocused,
            'left-0 opacity-0': isSearchFocused
          }
        )}
      >
        <Magnifier className="h-4 w-4" />
      </div>
    </div>
  )
}

export default SearchBar
