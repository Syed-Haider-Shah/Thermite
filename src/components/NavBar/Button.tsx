import Link from 'next/link'

import { FC, ReactNode } from 'react'

import { cn } from '@/utils/cn'

type INavButton = {
  children: ReactNode
  href: string
  active: string
}

const NavBarButtonComponent: FC<INavButton> = ({ children, href, active }) => (
  <Link
    href={href}
    className={cn(
      'flex w-1 -translate-x-3 cursor-pointer items-center gap-4 rounded-2.5 text-base font-normal leading-6 transition-colors duration-300 hover:text-white md:w-fit md:-translate-x-0',
      {
        'bg-white font-medium text-white md:bg-darkIndigo md:text-white':
          active.startsWith(href),
        'text-white/60': !active.startsWith(href)
      }
    )}
  >
    <div
      className={cn('h-10 w-2', {
        'w-2 -translate-x-4 rounded bg-white shadow-2xl shadow-white':
          active.startsWith(href),
        '': !active.startsWith(href)
      })}
    ></div>
    {children}
  </Link>
)

export default NavBarButtonComponent
