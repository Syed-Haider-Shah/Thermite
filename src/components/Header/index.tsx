import Link from 'next/link'

import { FC, useCallback, useState } from 'react'

import { Bell, Button } from '@/components'
import { Paths } from '@/constants'
import Feedback from '@/containers/Feedback'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/utils/cn'

const OPTIONS = [
  {
    name: 'Profile',
    link: Paths.PROFILE
  },
  {
    name: 'Settings',
    link: `${Paths.PROFILE}?edit=true`
  }
]

const HeaderComponent: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showFeedback, setShowFeedback] = useState<boolean>(false)
  const { signOut, user } = useAuth()

  const handleToggle = useCallback(() => setIsOpen((val) => !val), [])

  const handleClose = useCallback(() => setIsOpen(false), [])

  const handleBlurFeedback = useCallback(() => setShowFeedback(false), [])

  return (
    <header className="relative flex h-24 w-full items-center justify-between border-l border-black/5 bg-white px-9 pb-5.5 pt-9 text-black/90">
      <div className="flex items-center gap-7">
        <h1 className="rounded-full bg-black/5 px-4 py-3.5 text-sm font-semibold">
          Tickets 32
        </h1>
        <Button
          onClick={() => {
            setShowFeedback((val) => !val)
          }}
          active
          className="rounded-md py-3 bg-darkIndigo"
        >
          Add Feedback
        </Button>
      </div>
      {showFeedback && <Feedback onBlur={handleBlurFeedback} />}
      <div className="flex items-center gap-7">
        <Bell />
        <div className="flex items-center gap-4">
          <h1 className=" text-lg font-semibold leading-6">{user.name}</h1>
          <button
            type="button"
            onBlur={handleClose}
            onClick={handleToggle}
            className="h-9 w-9 rounded-full bg-darkIndigo"
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
                onClick={signOut}
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
