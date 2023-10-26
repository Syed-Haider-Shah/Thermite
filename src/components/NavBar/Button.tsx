import Link from 'next/link'

import { ReactNode } from 'react'

import classNames from 'classnames'

const Button = ({
  active,
  link,
  children
}: {
  active: boolean
  link: string
  children: ReactNode
}) => {
  return (
    <Link
      href={link}
      className={classNames(`py-4 px-5 gap-5 flex rounded-4.5 min-w-58`, {
        'bg-indigo text-white': active,
        'bg-white text-zinc': !active
      })}
    >
      {children}
    </Link>
  )
}
export default Button
