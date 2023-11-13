import { FC } from 'react'

import { MagnifierIcon } from '@/components'

type ISearch = {
  placeholder?: string
}

const SearchComponent: FC<ISearch> = ({ placeholder }) => (
  <div className="relative flex h-12 items-center overflow-hidden rounded-full border border-white/5 bg-black/5">
    <input
      title="Search bar"
      type="text"
      placeholder={placeholder}
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
  </div>
)

export default SearchComponent
