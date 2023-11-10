import { FC, ReactNode } from 'react'

type ICard = {
  children: ReactNode
}

const CardComponent: FC<ICard> = ({ children }) => {
  return (
    <div className="dark:bg-navy relative h-min w-full overflow-hidden rounded-2xl bg-white shadow-sm dark:shadow-none">
      {children}
    </div>
  )
}

export default CardComponent
