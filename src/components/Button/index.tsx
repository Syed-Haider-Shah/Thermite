import { FC, memo, ReactNode } from 'react'

import { clsx } from 'clsx'

type IGradient = {
  className?: string
  disabled?: boolean
  active?: boolean
  primary?: boolean
  type?: 'submit'
  children?: ReactNode
  onClick?: () => void
}

const ButtonComponent: FC<IGradient> = ({
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
      className={clsx(
        className,
        {
          'bg-gray rounded-full py-2.5': !active && !primary,
          'bg-activeBlue rounded-1.25 px-4.5 py-1 text-white': active,
          'rounded-1.25 px-4.5 border border-black/10 bg-transparent py-1 text-black/40':
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
