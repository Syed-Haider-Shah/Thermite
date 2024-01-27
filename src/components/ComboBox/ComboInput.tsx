import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'

import { cn } from '@/utils/cn'

type IComboInput = {
  title: string
} & InputHTMLAttributes<HTMLInputElement>

const ComboInput: ForwardRefRenderFunction<HTMLInputElement, IComboInput> = (
  { title, className, ...props },
  ref
) => {
  return (
    <fieldset
      className={cn(
        'box-border w-full overflow-hidden rounded-lg border-4',
        'border-loadGray focus-within:border-loadBlue',
        className
      )}
    >
      <div className="absolute w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
        {title}
      </div>
      <input className="w-full px-2 py-2.5 outline-none" {...props} ref={ref} />
    </fieldset>
  )
}

export default forwardRef(ComboInput)
