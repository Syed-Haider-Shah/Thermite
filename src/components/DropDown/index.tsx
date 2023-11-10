import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { memo, useState } from 'react'

import { clsx } from 'clsx'

import { ChevronDownIcon } from '@/components'

type IDropDown = {
  options: { name: string; value: string }[]
  name: string
  className?: string
}

const DropDownComponent = ({ options, className, name }: IDropDown) => {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleToggle = (): void => {
    setIsOpen((value) => !value)
  }

  const handleRoute = (value: { name: string }) => {
    const newParams = new URLSearchParams(searchParams.toString())
    return newParams.set(name, value.name)
  }

  return (
    <div
      className={clsx(
        'relative space-y-1 text-sm font-medium text-black/60 dark:text-white/60',
        className || 'w-40'
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between rounded-lg border border-black/5 bg-white/40 px-2 py-3 text-left dark:bg-black/60"
      >
        {options[0]?.name}
        <ChevronDownIcon
          className={clsx('origin-center transform transition', {
            '-rotate-90': !isOpen
          })}
        />
      </button>
      <ul
        className={clsx(
          'transition-maxHeight absolute z-30 flex flex-col overflow-hidden rounded-lg bg-white drop-shadow-xl duration-300 dark:bg-black',
          className || 'w-40',
          { 'max-h-sm': isOpen, 'max-h-0': !isOpen }
        )}
      >
        {options.map((value) => (
          <Link
            href={`${pathname}?${handleRoute(value)}`}
            key={value.name}
            className="w-full cursor-pointer px-2 py-2.5 text-left hover:bg-black/5 dark:hover:bg-white/5"
          >
            {value.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default memo(DropDownComponent)
