import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { FC } from 'react'

import {
  Archive,
  Calender,
  Employees,
  Explore,
  Gear,
  Grid,
  People
} from '@/components/Icons'
import { Paths } from '@/constants'

import Button from './Button'

const ROUTES = [
  { name: 'Dashboard', link: Paths.HOME, icon: <Grid /> },
  { name: 'Tickets', link: Paths.TICKET, icon: <Archive /> },
  { name: 'Customers', link: Paths.CUSTOMER, icon: <People /> },
  { name: 'Forms', link: Paths.FORM, icon: <Calender /> },
  { name: 'Guides', link: Paths.GUIDE, icon: <Explore /> },
  {
    name: 'Employees',
    link: Paths.EMPLOYEE,
    icon: <Employees />
  },
  { name: 'Softwares', link: Paths.SOFTWARE, icon: <Gear /> }
]

const NavBarComponent: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 h-screen bg-white px-5 py-10 drop-shadow-lg">
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
