import { ReactNode } from 'react'

type IPageHeader = {
  title: string
  children: ReactNode
}

const PageHeader = ({ title, children }: IPageHeader) => (
  <div className="flex py-6 items-center bg-lightGray w-full px-7 justify-between">
    <h1>{title}</h1>
    <div className="flex items-center gap-3">{children}</div>
  </div>
)

export default PageHeader
