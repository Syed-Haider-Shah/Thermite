import Link from 'next/link'

import { ReactNode } from 'react'

const Button = ({
  colorbg,
  colortxt,
  link,
  children
}: {
  colorbg: string
  colortxt: string
  link: string
  children: ReactNode
}) => {
  return (
    <Link
      href={link}
      className={`py-4 px-5 gap-5 flex rounded-4.5 ${colorbg} ${colortxt} min-w-58`}
    >
      {children}
    </Link>
  )
}
export default Button
