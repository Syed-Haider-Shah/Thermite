import Link from 'next/link'

import { FC } from 'react'

type INavButton = {
  title: string
  href: string
  active: string
}

const NavBarButtonComponent: FC<INavButton> = ({ title, href, active }) => (
  <Link
    href={href}
    className={`px-4.5 rounded-2.5 hover:bg-gray cursor-pointer py-2 text-xl font-semibold leading-6 transition-colors duration-300 hover:text-white dark:hover:text-black ${
      active.indexOf(href) === 1
        ? 'bg-gray text-white dark:text-white/90'
        : 'text-black/50 dark:text-white/40'
    }`}
  >
    {title}
  </Link>
)

export default NavBarButtonComponent
