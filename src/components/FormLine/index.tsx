import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  KeyboardEvent
} from 'react'

import { cn } from '@/utils/cn'

interface IFormLine extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  type?: string
  title?: string
  className?: string
  placeholder?: string
  value?: string
  primary?: string | boolean
  secondary?: boolean
  required?: boolean
  disabled?: boolean
  error?: string | boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const FormLineComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  IFormLine
> = (
  {
    id,
    type,
    title,
    className,
    placeholder,
    value,
    primary,
    secondary,
    required,
    disabled,
    error,
    onChange,
    onKeyDown
  },
  ref
) => {
  return (
    <label
      title={title}
      htmlFor={id}
      className={cn('relative flex flex-col gap-y-1 font-semibold', {
        'text-sm leading-4 text-black/60': secondary,
        'text-sm leading-4 text-black/90': primary,
        'mt-6 text-xl leading-6 text-black/60 ': !primary && !secondary
      })}
    >
      <div className="flex gap-1">
        {title}
        {required && <span className="text-red">*</span>}
      </div>
      <input
        className={cn(
          className,
          'text-base font-medium leading-5 text-black/90 placeholder-black/40 outline-none autofill:bg-black/5',
          {
            'rounded-1.25 border border-heavyGray': secondary,
            'rounded-1.25 border border-heavyGray px-2 py-2.25': primary,
            'rounded-full bg-black/5 p-3': !primary && !secondary
          }
        )}
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        aria-label={title}
      />
      <div
        className={cn(
          'whitespace-pre text-sm font-semibold leading-4 text-red duration-300 ease-in-out',
          { 'text-red/0': !error }
        )}
      >
        {error || ''}
      </div>
    </label>
  )
}

export default forwardRef(FormLineComponent)
