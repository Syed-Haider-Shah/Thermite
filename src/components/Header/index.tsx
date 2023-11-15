import Link from 'next/link'

import { FC, useState } from 'react'

import { Paths } from '@/constants'
import { cn } from '@/utils/cn'

const OPTIONS = [
  {
    name: 'Profile',
    link: Paths.PROFILE
  },
  {
    name: 'Settings',
    link: Paths.PROFILE_UPDATE
  }
]

const HeaderComponent: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="relative flex h-24 w-full flex-row-reverse border-l border-black/5 bg-lightGray">
      <div className="flex items-center gap-x-4 px-7 pb-5.5 pt-9">
        <h1 className="text-lg font-semibold leading-6">Admin</h1>
        <button
          type="button"
          onClick={() => setIsOpen((val) => !val)}
          className="bg-darkIndigo h-9 w-9 rounded-full"
        />
      </div>
      <ul
        className={cn(
          'absolute right-2 top-20 z-10 flex w-36 flex-col overflow-hidden rounded-lg bg-white drop-shadow-xl transition-maxHeight duration-300 ',
          { 'max-h-sm': isOpen, 'max-h-0': !isOpen }
        )}
      >
        {OPTIONS.map(({ link, name }) => (
          <Link
            href={link}
            key={name}
            className="w-full cursor-pointer border border-black/5 px-5 py-2.5 text-left text-sm font-medium hover:bg-black/5"
          >
            {name}
          </Link>
        ))}
        <li>
          <button
            type="button"
            className="w-full cursor-pointer border border-black/5 px-5 py-2.5 text-left text-sm font-medium hover:bg-black/5"
          >
            Logout
          </button>
        </li>
      </ul>
    </header>
  )
}

export default HeaderComponent
