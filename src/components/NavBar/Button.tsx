import Link from 'next/link'

import { FC } from 'react'

import { cn } from '@/utils/cn'

type INavButton = {
  title: string
  href: string
  active: string
}

const NavBarButtonComponent: FC<INavButton> = ({ title, href, active }) => (
  <Link
    href={href}
    className={cn(
      'cursor-pointer rounded-2.5 px-4.5 py-2 text-xl font-semibold leading-6 transition-colors duration-300 hover:bg-gray hover:text-white',
      {
        'bg-gray text-white': active === href,
        'text-black/50': active !== href
      }
    )}
  >
    {title}
  </Link>
)

export default NavBarButtonComponent
