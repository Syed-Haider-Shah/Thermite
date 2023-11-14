import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  TextareaHTMLAttributes
} from 'react'

import { clsx } from 'clsx'

interface IFormLine extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  title?: string
  className?: string
  placeholder?: string
  value?: string
  primary?: string | boolean
  required?: boolean
  disabled?: boolean
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
    required,
    disabled,
    onChange,
    onKeyDown,
    rows
  },
  ref
) => {
  return (
    <label
      title={title}
      htmlFor={id}
      className={clsx('relative flex flex-col gap-y-1 font-semibold', {
        'text-sm leading-4 text-black/90': primary,
        'mt-6 text-xl leading-6 text-black/60 ': !primary
      })}
    >
      <div className="flex gap-1">
        {title}
        {required && <span className="text-red">*</span>}
      </div>
      <textarea
        className={clsx(
          className,
          'text-base font-medium leading-5 text-black/90 placeholder-black/40 outline-none autofill:bg-black/5',
          {
            'rounded-1.25 border border-heavyGray px-2 py-2.5': primary,
            'rounded-full bg-black/5 p-3': !primary
          }
        )}
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
    </label>
  )
}

export default forwardRef(FormAreaComponent)
