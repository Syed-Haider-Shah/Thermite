import { ReactNode } from 'react'

type IButton = {
  children: ReactNode
  className: string
}

const Button = ({ children, className }: IButton) => (
  <button className={className}>{children}dic</button>
)

export default Button
