import { FC, memo, ReactNode } from 'react'

import { cn } from '@/utils/cn'

import Spinner from '../Icons/Spinner'

type IButton = {
  className?: string
  disabled?: boolean
  active?: boolean
  primary?: boolean
  type?: 'submit'
  children?: ReactNode
  isLoading?: boolean
  onClick?: () => void
}

const ButtonComponent: FC<IButton> = ({
  className,
  disabled,
  active,
  primary,
  type,
  children,
  isLoading,
  onClick
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type ? 'submit' : 'button'}
      className={cn(
        'flex items-center justify-center gap-x-2 rounded-full px-4.5 py-3 text-sm font-bold transition duration-300 hover:bg-black/5 disabled:bg-black/40',
        {
          '!rounded-1.25 border bg-activeBlue py-1 text-white hover:invert':
            active,
          '!rounded-1.25 border border-black/10 bg-transparent text-black/40':
            primary
        },
        className
      )}
    >
      {children}
      {isLoading && <Spinner />}
    </button>
  )
}

export default memo(ButtonComponent)
