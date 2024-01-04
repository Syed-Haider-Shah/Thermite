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
  cusForm?: boolean
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
    cusForm,
    required,
    disabled,
    error,
    onChange,
    onKeyDown,
    ...restProps
  },
  ref
) => {
  return (
    <label
      title={title}
      htmlFor={id}
      className={cn(
        'relative mb-5 flex flex-col gap-y-1 text-xl font-semibold leading-6 text-black/60',
        {
          'text-sm leading-4 text-black/60': secondary,
          'text-sm leading-4 text-black/90': primary,
          absol: cusForm
        }
      )}
    >
      {title && (
        <div className="flex gap-1">
          {title}
          {required && <span className="text-red">*</span>}
        </div>
      )}
      <input
        className={cn(
          'rounded-full bg-black/5 text-base font-medium leading-5 text-black/90 placeholder-black/40 outline-none autofill:bg-black/5',
          {
            'rounded-md border border-heavyGray': secondary,
            'rounded-md border border-heavyGray bg-white/40 px-2 py-2.25':
              primary,
            '-translate-y-3 rounded bg-transparent px-4 font-light': cusForm
          },
          className
        )}
        {...restProps}
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
          'absolute -bottom-5 text-sm font-semibold leading-4 text-red duration-300 ease-in-out',
          { 'text-red/0': !error }
        )}
      >
        {error}
      </div>
    </label>
  )
}

export default forwardRef(FormLineComponent)
