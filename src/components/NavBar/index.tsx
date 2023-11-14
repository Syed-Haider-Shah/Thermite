import { usePathname } from 'next/navigation'

import { FC } from 'react'

import { LogoIcon } from '@/components'

import Button from './Button'

const ROUTES = [
  { name: 'Dashboard', link: '/' },
  { name: 'Tickets', link: '/tickets' },
  { name: 'Customers', link: '/customers' },
  { name: 'Forms', link: '/forms' },
  { name: 'Guides', link: '/guides' },
  { name: 'Softwares', link: '/softwares' }
]

const NavBarComponent: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 h-screen bg-white px-5 py-10">
      <div className="flex items-center">
        <LogoIcon />
      </div>
      <div className="mt-[172px] flex w-55 flex-col gap-4">
        {ROUTES.map((route) => (
          <Button
            key={route.name}
            href={route.link}
            title={route.name}
            active={pathname}
          />
        ))}
      </div>
    </nav>
  )
}

export default NavBarComponent
