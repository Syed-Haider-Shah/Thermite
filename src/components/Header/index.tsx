import Link from 'next/link'

import { FC, useCallback, useState } from 'react'

import { Bell, Button, SearchBar } from '@/components'
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

  const handleOpen = useCallback(() => setIsOpen(true), [])

  const handleClose = useCallback(() => setIsOpen(false), [])

  return (
    <header className="relative flex h-24 w-full items-center justify-between border-l border-black/5 bg-white px-7 pb-5.5 pt-9 text-black/90">
      <div className="flex items-center gap-7">
        <SearchBar placeholder="Search Tickets" />
        <Button active className="rounded-md py-3">
          Create
        </Button>
      </div>
      <div className="flex items-center gap-7">
        <Bell />
        <div
          className="flex items-center gap-4"
          onBlur={handleClose}
          onFocus={handleOpen}
        >
          <h1 className=" text-lg font-semibold leading-6">Admin</h1>
          <button
            type="button"
            className="bg-darkIndigo h-9 w-9 rounded-full"
          />
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
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
