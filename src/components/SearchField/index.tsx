import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  useMemo
} from 'react'

import classNames from 'classnames'

import { Spinner } from '@/components'

type ISearchField = {
  id: string
  type?: string
  title?: string
  list?: string[]
  isLoading?: boolean
  placeholder?: string
  className?: string
  value?: string
  error?: string | boolean
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const SearchField: ForwardRefRenderFunction<HTMLInputElement, ISearchField> = (
  {
    id,
    type,
    title,
    list,
    isLoading,
    placeholder,
    className,
    value,
    error,
    required,
    disabled,
    onChange,
    onKeyDown,
    ...restProps
  },
  ref
) => {
  const dropList = useMemo(
    () =>
      list?.map((item) => (
        <li key={item} className="border-b border-black/10 last:border-b-0 ">
          <button
            type="button"
            className="p-4 hover:bg-black/20 w-full text-left line-clamp-1"
          >
            {item}
          </button>
        </li>
      )),
    [list]
  )

  return (
    <div className={classNames('flex flex-col relative gap-2', className)}>
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
      <div className="flex w-full relative">
        <input
          {...restProps}
          className="rounded-xl bg-black/5 p-3 outline-none w-full"
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
        {isLoading && (
          <Spinner className="absolute opacity-50 h-4 w-4 right-4 top-4" />
        )}
      </div>
      <ul
        className={classNames(
          {
            'max-h-100': list && list.length > 0,
            'max-h-0': !list || list.length < 1
          },
          'absolute top-20 transition-maxHeight rounded-xl overflow-hidden bg-black/5 outline-none w-full shadow-md'
        )}
      >
        {dropList}
      </ul>
    </div>
  )
}

export default forwardRef(SearchField)
