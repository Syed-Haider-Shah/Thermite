/* eslint-disable react/jsx-props-no-spreading */
import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent
} from 'react'

import classNames from 'classnames'

import { Spinner } from '@/components'

interface IFormLine extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  type?: string
  title?: string
  showStatus?: boolean
  isLoading?: boolean
  placeholder?: string
  className?: string
  value?: string
  error?: string | boolean
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onStatusClick?: (e: MouseEvent<HTMLDivElement>) => void
}

const FormLine: ForwardRefRenderFunction<HTMLInputElement, IFormLine> = (
  {
    id,
    type,
    title,
    showStatus,
    isLoading,
    placeholder,
    className,
    value,
    error,
    required,
    disabled,
    onChange,
    onKeyDown,
    onStatusClick,
    ...restProps
  },
  ref
) => {
  return (
    <div className="relative mt-6 flex flex-col gap-y-1 ">
      <label
        title={title}
        htmlFor={id}
        className={classNames('text-sm font-bold leading-4', {
          'text-red': error,
          'text-black/60': !error
        })}
      >
        {title}
        {required && '*'}
      </label>
      <input
        {...restProps}
        id={id}
        className={classNames(
          'rounded-xl bg-black/5 p-3 text-base font-medium leading-5 text-black/90 placeholder-black/40 outline-none autofill:bg-black/5',
          className
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
      {showStatus && (
        <div
          className={classNames(
            'absolute bottom-3 right-3 flex cursor-pointer items-center justify-center rounded-full bg-gray-medium p-1 text-white [&>svg]:h-3.5 [&>svg]:w-3.5',
            {
              'animate-spin': isLoading
            }
          )}
          onClick={onStatusClick}
        >
          {isLoading && <Spinner />}
        </div>
      )}
      <span className="text-sm font-semibold leading-4 text-red">{error}</span>
    </div>
  )
}

export default forwardRef(FormLine)
