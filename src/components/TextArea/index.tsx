/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, ForwardRefRenderFunction } from 'react'

import classNames from 'classnames'

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string
  className?: string
  title?: string
  required?: boolean
  error?: string | undefined
  rows?: number
  cols?: number
  ariaLable?: string
  placeholder?: string
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, ITextArea> = (
  {
    id,
    className,
    title,
    rows,
    cols,
    required,
    ariaLable,
    placeholder,
    error,
    ...restProps
  },
  ref
) => {
  return (
    <label
      title={title}
      htmlFor={id}
      className={classNames(
        'relative mt-6 flex flex-col gap-y-1.5 text-xl font-semibold leading-4',
        {
          'text-red': error,
          'text-darkGray': !error
        }
      )}
    >
      {title}
      {required && '*'}
      <span className="absolute right-0 text-sm font-semibold leading-4 text-red">
        {error}
      </span>
      <textarea
        {...restProps}
        id={id}
        ref={ref}
        rows={rows}
        cols={cols}
        required={required}
        aria-label={ariaLable}
        placeholder={placeholder}
        className={classNames(
          className,
          {
            'border-red focus:border-red': error,
            'focus:border-white/40 ': !error
          },
          'relative w-full resize-none rounded-xl bg-black/5 px-5 py-2.5 text-base placeholder-black/40 placeholder:font-medium focus:outline-none'
        )}
      />
    </label>
  )
}

export default forwardRef(TextArea)
