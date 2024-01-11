import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
      'group flex cursor-pointer gap-2 rounded-2.5 px-4.5 py-2 text-base font-normal leading-6 transition-colors duration-300 hover:font-medium',
      {
        'selected bg-darkIndigo text-white': active === href,
        'text-white': active !== href
      }
    )}
  >
    {children}
  </Link>
)

export default NavBarButtonComponent
