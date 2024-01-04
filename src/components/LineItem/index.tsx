import { ReactNode } from 'react'

import { cn } from '@/utils/cn'

const LineItem = ({
  title,
  item,
  className
}: {
  title: string
  item?: ReactNode
  className?: string
}) => (
  <div className={cn('pb-4', className)} title={title}>
    <h2 className="mb-1 text-base font-semibold leading-4">{title}</h2>
    <p className="line-clamp-2 text-sm font-normal text-gray">
      {item || '----'}
    </p>
  </div>
)

export default LineItem
