import Image from 'next/image'

import { cn } from '@/utils/cn'
/* eslint-disable @next/next/no-img-element */
const AvatarImage = ({
  avatarSrc,
  size
}: {
  avatarSrc?: string | null
  size?: string
}) =>
  avatarSrc ? (
    <Image
      src={avatarSrc}
      alt="avatar"
      width="100"
      height="100"
      className={cn('h-24 w-24 rounded-full', [size || ''])}
    />
  ) : (
    <div className={cn('h-24 w-24 rounded-full bg-darkGray', [size || ''])} />
  )

export default AvatarImage
