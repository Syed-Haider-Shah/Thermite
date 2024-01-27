import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import { ChevronDownIcon } from '@/components'
import { cn } from '@/utils/cn'

type IDropDown = {
  options: string[]
  className?: string
  setValue: Dispatch<SetStateAction<string>>
  value: string
  title?: string
  required?: boolean
}

const DropDownComponent2 = ({
  options,
  className,
  setValue,
  value,
  title,
  required
}: IDropDown) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (): void => {
    setIsOpen((value) => !value)
  }

  const handleSelect = useCallback(
    (option: string) => {
      setValue(option)
      setIsOpen(false)
    },
    [setValue]
  )

  return (
    <div
      className={cn(
        'relative mb-5 w-40 text-sm font-medium text-darkIndigo/60',
        className
      )}
    >
      {title && (
        <h1 className="flex gap-1 text-sm font-semibold text-darkIndigo/90">
          {title}
          {required && <span className="text-red">*</span>}
        </h1>
      )}
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between rounded-lg border border-heavyGray bg-white/40 px-2 py-2.25 text-left"
      >
        {value}
        <ChevronDownIcon
          className={cn('origin-center transform transition', {
            '-rotate-90': !isOpen
          })}
        />
      </button>
      <div
        className={cn(
          'absolute top-16 z-30 flex w-40 flex-col overflow-hidden rounded-lg bg-white drop-shadow-xl transition-maxHeight duration-300 ',
          className,
          {
            'scrollbar-primary max-h-48 overflow-y-auto shadow-sm': isOpen,
            'max-h-0': !isOpen
          }
        )}
      >
        {options.map((option) => (
          <button
            type="button"
            onClick={() => handleSelect(option)}
            key={option}
            className="w-full cursor-pointer px-3 py-2.5 text-left hover:bg-darkIndigo/5"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DropDownComponent2
