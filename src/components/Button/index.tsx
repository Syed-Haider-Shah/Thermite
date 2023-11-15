import { FC, memo, ReactNode } from 'react'

import { cn } from '@/utils/cn'

type IButton = {
  className?: string
  disabled?: boolean
  active?: boolean
  primary?: boolean
  type?: 'submit'
  children?: ReactNode
  onClick?: () => void
}

const ButtonComponent: FC<IButton> = ({
  className,
  disabled,
  active,
  primary,
  type,
  children,
  onClick
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type ? 'submit' : 'button'}
      className={cn(
        className,
        {
          'rounded-full bg-gray py-2.5': !active && !primary,
          'rounded-1.25 bg-activeBlue px-4.5 py-1 text-white': active,
          'rounded-1.25 border border-black/10 bg-transparent px-4.5 py-1 text-black/40':
            primary
        },
        'flex items-center justify-center gap-x-2 text-sm font-bold'
      )}
    >
      {children}
    </button>
  )
}

export default memo(ButtonComponent)
