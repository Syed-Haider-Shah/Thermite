import { FC, ReactNode } from 'react'

type ICard = {
  children: ReactNode
  title?: string
  id?: string
}

const CardComponent: FC<ICard> = ({ children, title, id }) => {
  return (
    <section
      id={id}
      title={title}
      className="relative h-min w-full space-y-5 overflow-hidden rounded-2xl bg-white p-4 shadow-sm"
    >
      {children}
    </section>
  )
}

export default CardComponent
