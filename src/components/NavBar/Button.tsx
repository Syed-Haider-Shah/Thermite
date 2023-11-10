import Link from 'next/link'

import { FC } from 'react'

import { clsx } from 'clsx'

type INavButton = {
  title: string
  href: string
  active: string
}

const NavBarButtonComponent: FC<INavButton> = ({ title, href, active }) => (
  <Link
    href={href}
    className={clsx(
      'px-4.5 rounded-2.5 hover:bg-gray cursor-pointer rounded-lg py-2 text-xl font-semibold leading-6 transition-colors duration-300 hover:text-white',
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
