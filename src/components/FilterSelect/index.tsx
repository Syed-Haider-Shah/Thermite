import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { memo, useCallback, useEffect, useState } from 'react'

import { ChevronDownIcon } from '@/components'
import { cn } from '@/utils/cn'

type IDropDown = {
  options: { name: string; value: string }[]
  name: string
  className?: string
}

const FilterSelect = ({ options, className, name }: IDropDown) => {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const selectedValue = searchParams.get(name)
  const pathname = usePathname()

  const handleToggle = (): void => {
    setIsOpen((value) => !value)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [selectedValue])

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [name, searchParams]
  )

  return (
    <div
      className={cn(
        'relative space-y-1 text-sm font-medium text-black/60',
        className || 'w-40'
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between rounded-lg border border-black/5 bg-white/40 px-2 py-3 text-left"
      >
        {options.find(({ value }) => value === selectedValue)?.name ??
          options[0]?.name}
        <ChevronDownIcon
          className={cn('origin-center transform transition', {
            '-rotate-90': !isOpen
          })}
        />
      </button>
      <ul
        className={cn(
          'absolute z-30 flex flex-col overflow-hidden rounded-lg bg-white drop-shadow-xl transition-maxHeight duration-300 ',
          className || 'w-40',
          {
            'scrollbar-primary max-h-48 overflow-y-scroll': isOpen,
            'max-h-0': !isOpen
          }
        )}
      >
        {options.map(({ name, value }) => (
          <Link
            href={`${pathname}?${createQueryString(value)}`}
            key={name}
            className="w-full cursor-pointer px-2 py-2.5 text-left hover:bg-black/5"
          >
            {name}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default memo(FilterSelect)
