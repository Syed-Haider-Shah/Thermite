import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  KeyboardEvent
} from 'react'

import { clsx } from 'clsx'

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
    onChange,
    onKeyDown
  },
  ref
) => {
  return (
    <label
      title={title}
      htmlFor={id}
      className={clsx('relative flex flex-col gap-y-1 font-semibold', {
        'text-sm leading-4 text-black/60': secondary,
        'text-sm leading-4 text-black/90': primary,
        'mt-6 text-xl leading-6 text-black/60 ': !primary && !secondary
      })}
    >
      <div className="flex">
        {title}
        {required && <div className="text-red">*</div>}
      </div>
      <input
        className={clsx(
          className,
          'text-base font-medium leading-5 text-black/90 placeholder-black/40 outline-none autofill:bg-black/5',
          {
            'rounded-1.25 border-heavyGray border': secondary,
            'py-2.25 rounded-1.25 border-heavyGray border px-2': primary,
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
    </label>
  )
}

export default forwardRef(FormLineComponent)
