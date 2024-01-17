import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { cn } from '@/utils/cn'
const DateTimePicker = ({
  title,
  showTime,
  id
}: {
  title: string
  showTime?: boolean
  id: string
}) => {
  const [startDate, setStartDate] = useState<null | Date>(null)

  return (
    <label
      htmlFor={id}
      className={cn(
        'box-border h-12 w-full translate-y-1 rounded-lg border-4 px-4',
        'border-loadGray focus-within:border-loadBlue'
      )}
    >
      <div className="w-fit -translate-y-3 translate-x-3 bg-white px-1 text-sm">
        {title}
      </div>
      <DatePicker
        id={id}
        className="w-96 -translate-y-2.5 outline-none"
        selected={startDate}
        showTimeSelect={showTime}
        placeholderText="Select a date"
        dateFormat={showTime ? 'MMMM d, yyyy h:mm aa' : 'MMMM d, yyyy'}
        onChange={(date) => setStartDate(date)}
      />
    </label>
  )
}
export default DateTimePicker
