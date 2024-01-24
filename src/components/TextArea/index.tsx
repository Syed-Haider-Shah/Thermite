import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  TextareaHTMLAttributes
} from 'react'

import { cn } from '@/utils/cn'

interface IFormLine extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  title?: string
  className?: string
  placeholder?: string
  value?: string
  primary?: string | boolean
  custForm?: boolean
  required?: boolean
  disabled?: boolean
  error?: string | boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

const FormAreaComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  IFormLine
> = (
  {
    id,
    title,
    className,
    placeholder,
    value,
    primary,
    custForm,
    required,
    disabled,
    onChange,
    onKeyDown,
    error,
    rows,
    ...props
  },
  ref
) => {
  return (
    <label
      title={title}
      htmlFor={id}
      className={cn('relative flex flex-col gap-y-1 font-semibold', {
        'text-sm leading-4 text-black': primary,
        'mt-6 text-xl leading-6 text-black ': !primary,
        'mt-0 -translate-y-3': custForm
      })}
    >
      <div className="flex gap-1">
        {title}
        {required && <span className="text-red">*</span>}
      </div>
      <textarea
        className={cn(
          'resize-none text-base font-medium leading-5 text-black/10 placeholder-black/40 outline-none autofill:bg-black/5',
          {
            'rounded-1.25 border border-heavyGray px-2 py-2.5': primary,
            'rounded-full bg-black/5 p-3': !primary,
            '!rounded-1.25  border-0 bg-transparent px-2 py-2.5': custForm
          },
          className
        )}
        {...props}
        ref={ref}
        placeholder={placeholder}
        rows={rows}
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
        {error}
      </div>
    </label>
  )
}

export default forwardRef(FormAreaComponent)
