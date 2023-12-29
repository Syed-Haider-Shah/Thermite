import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { FC } from 'react'

import {
  Customers,
  Dashboard,
  Employees1,
  Explore,
  Forms,
  Softwares,
  Tickets
} from '@/components/Icons'
import { Paths } from '@/constants'
import { useAuth } from '@/context/AuthContext'

import Button from './Button'

const ROUTES = [
  {
    name: 'Dashboard',
    link: Paths.HOME,
    icon: <Dashboard className="invert" />
  },
  { name: 'Tickets', link: Paths.TICKET, icon: <Tickets className="invert" /> },
  {
    name: 'Customers',
    link: Paths.CUSTOMER,
    icon: <Customers className="invert" />
  },
  { name: 'Forms', link: Paths.FORM, icon: <Forms className="invert" /> },
  { name: 'Guides', link: Paths.GUIDE, icon: <Explore className="invert" /> },
  {
    name: 'Employees',
    link: Paths.EMPLOYEE,
    icon: <Employees1 className="invert" />
  },
  {
    name: 'Softwares',
    link: Paths.SOFTWARE,
    icon: <Softwares className="invert" />
  }
]

const NavBarComponent: FC = () => {
  const pathname = usePathname()
  const { user } = useAuth()
  return (
    <nav className="sticky top-0 h-screen -translate-x-1 bg-darkIndigo px-4 py-10 drop-shadow-lg">
      <Image
        src="/logo.svg"
        className="mt-6 px-1"
        alt="logo"
        width={300}
        height={120}
      />
      <div className="mt-[80px] flex w-55 flex-col gap-4">
        {ROUTES.map((route) => {
          if (
            route.link === Paths.EMPLOYEE &&
            user.role !== 'admin' &&
            user.role !== 'superadmin'
          )
            return null

          return (
            <Button key={route.name} href={route.link} active={pathname}>
              {route.icon} {route.name}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBarComponent
