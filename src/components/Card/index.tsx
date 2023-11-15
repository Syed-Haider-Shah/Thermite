import { FC, ReactNode } from 'react'

import { cn } from '@/utils/cn'

type ICard = {
  children: ReactNode
  className?: string
  title?: string
  id?: string
}

const Card: FC<ICard> = ({ children, className, title, id }) => {
  return (
    <section
      id={id}
      title={title}
      className={cn(
        'relative h-min w-full space-y-5 overflow-hidden rounded-2xl bg-white p-4 shadow-sm',
        className
      )}
    >
      {children}
    </section>
  )
}

export default Card
