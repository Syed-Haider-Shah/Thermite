import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { FC } from 'react'

import {
  Archive,
  Calender,
  Circle,
  Employees,
  Explore,
  Gear,
  Grid,
  People
} from '@/components/Icons'

import Button from './Button'

const ROUTES = [
  { name: 'Dashboard', link: '/', icon: <Grid /> },
  { name: 'Tickets', link: '/tickets', icon: <Archive /> },
  { name: 'Customers', link: '/customers', icon: <People /> },
  { name: 'Forms', link: '/forms', icon: <Calender /> },
  { name: 'Guides', link: '/guides', icon: <Explore /> },
  {
    name: 'Employees',
    link: '/employees',
    icon: <Employees />
  },
  { name: 'Softwares', link: '/softwares', icon: <Circle /> },
  { name: 'Settings', link: '/settings', icon: <Gear /> }
]

const NavBarComponent: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 h-screen bg-white px-5 py-10">
      <Image
        src="/logo.svg"
        className="px-4"
        alt="logo"
        width={120}
        height={120}
      />
      <div className="mt-[80px] flex w-55 flex-col gap-4">
        {ROUTES.map((route) => (
          <Button key={route.name} href={route.link} active={pathname}>
            {route.icon} {route.name}
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default NavBarComponent
