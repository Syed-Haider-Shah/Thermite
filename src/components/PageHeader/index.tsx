import { ReactNode } from 'react'

type IPageHeader = {
  title: string
  children: ReactNode
}

const PageHeader = ({ title, children }: IPageHeader) => (
  <div className="flex h-19.25 items-center bg-lightGray w-full px-7 justify-between">
    <h1>{title}</h1>
    <div className="flex items-center gap-3">{children}</div>
  </div>
)

export default PageHeader
