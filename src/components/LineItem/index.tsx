import { ReactNode } from 'react'

const LineItem = ({ title, item }: { title: string; item?: ReactNode }) => (
  <div className="pb-4" title={title}>
    <h2 className="mb-1 text-sm font-semibold leading-4">{title}</h2>
    <p className="line-clamp-2 font-normal text-black/80">{item || '----'}</p>
  </div>
)

export default LineItem
