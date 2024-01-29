import { ReactNode } from 'react'

import { cn } from '@/utils/cn'

const LineItem = ({
  title,
  item,
  className,
  isDate
}: {
  title: string
  item?: ReactNode
  isDate?: boolean
  className?: string
}) => (
  <div
    className={cn(
      'space-y-2 border-b border-black/10 pb-1 text-black/90 ',
      className
    )}
  >
    <h2 className="text-base font-semibold capitalize leading-4">{title}:</h2>
    <p className="whitespace-nowrap text-sm font-normal text-black/60">
      {isDate ? new Date(`${item}`).toDateString() : item}
    </p>
  </div>
)

export default LineItem
