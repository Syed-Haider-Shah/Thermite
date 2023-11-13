import { FC } from 'react'

const HeaderComponent: FC = () => {
  return (
    <header className="flex h-24 w-full flex-row-reverse border-r border-black/5 bg-white">
      <div className="pb-5.5 flex items-center gap-x-4 px-7 pt-9">
        <h1 className="text-lg font-semibold leading-6">Admin</h1>
        <div className="h-9 w-9 rounded-full bg-darkGray" />
      </div>
    </header>
  )
}

export default HeaderComponent
