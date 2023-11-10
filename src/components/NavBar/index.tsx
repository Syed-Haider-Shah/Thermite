import { FC } from 'react'

import { LogoIcon } from '@/components'

import Button from './Button'

type INavBar = {
  routes: {
    name: string
    link: string
  }[]
  current: string
}

const NavBarComponent: FC<INavBar> = ({ routes, current }) => (
  <nav className="sticky top-0 h-screen border-r border-white/5 px-5 py-10">
    <div className="flex items-center">
      <LogoIcon />
    </div>
    <div className="w-55 mt-[172px] flex flex-col gap-4">
      {routes.map((route) => (
        <Button
          key={route.name}
          href={route.link}
          title={route.name}
          active={current}
        />
      ))}
    </div>
  </nav>
)

export default NavBarComponent
