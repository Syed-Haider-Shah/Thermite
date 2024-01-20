import { Dispatch, SetStateAction } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { cn } from '@/utils/cn'
const DateTimePicker = ({
  title,
  showTime,
  id,
  className,
  setDate,
  date
}: {
  title: string
  showTime?: boolean
  id: string
  className?: string
  setDate?: Dispatch<SetStateAction<Date | null>>
  date?: Date | null
}) => {
  return (
    <fieldset
      className={cn(
        'z-10 box-border block h-14 w-full translate-y-1 rounded-lg border-4 px-4',
        'border-loadGray focus-within:border-loadBlue',
        className
      )}
    >
      <legend className="-trnaslate-y-1 w-fit px-1 text-sm font-medium text-darkIndigo/90">
        {title}
      </legend>
      <DatePicker
        id={id}
        className="w-full min-w-[14.5rem] bg-transparent outline-none"
        selected={date}
        wrapperClassName="w-full"
        showTimeSelect={showTime}
        placeholderText="Select a date"
        dateFormat={showTime ? 'MMMM d, yyyy h:mm aa' : 'MMMM d, yyyy'}
        onChange={(date) => setDate && setDate(date)}
      />
    </fieldset>
  )
}
export default DateTimePicker
