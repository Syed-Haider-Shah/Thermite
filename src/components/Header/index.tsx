import { FC } from 'react'

const HeaderComponent: FC = () => {
  return (
    <header className="flex h-24 flex-row-reverse bg-white">
      <div className="pb-5.5 flex items-center gap-x-4 px-7 pt-9">
        <h1 className="text-lg font-semibold leading-6">Admin</h1>
        <div className="bg-darkGray h-9 w-9 rounded-full" />
      </div>
    </header>
  )
}

export default HeaderComponent
