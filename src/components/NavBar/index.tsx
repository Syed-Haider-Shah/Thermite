import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classnames from 'classnames'

import Button from './Button'
import { PageColors } from './constants'

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="h-full bg-white shadow flex flex-col px-6 gap-9">
      <Link href={'/'}>
        <Image
          alt="logo"
          src="/LOGO1.png"
          width={73}
          height={60}
          className="mt-11"
        />
      </Link>
      <div className="flex-col flex font-medium text-lg gap-4">
        {PageColors.map((option) => (
          <Button
            key={option.link}
            link={option.link}
            colorbg={classnames({
              [`bg-indigo`]: pathname === option.link,
              [`bg-white`]: pathname !== option.link
            })}
            colortxt={classnames({
              [`text-white`]: pathname === option.link,
              [`text-zinc`]: pathname !== option.link
            })}
          >
            {pathname === option.link ? option.logoActive : option.logoBlur}
            {option.text}
          </Button>
        ))}
      </div>
    </nav>
  )
}
export default NavBar
