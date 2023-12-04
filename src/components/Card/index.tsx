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
        'relative flex h-full flex-col gap-5 rounded-2xl bg-white p-4 drop-shadow-md',
        className
      )}
    >
      {children}
    </section>
  )
}

export default Card
