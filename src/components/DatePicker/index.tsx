import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { cn } from '@/utils/cn'
const DateTimePicker = ({
  title,
  showTime
}: {
  title: string
  showTime?: boolean
}) => {
  const [startDate, setStartDate] = useState<null | Date>(new Date())

  return (
    <label
      htmlFor="date-picker"
      className={cn(
        'box-border h-12 w-full rounded-lg border-4 px-4',
        'border-loadGray focus-within:border-loadBlue'
      )}
    >
      <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
        {title}
      </div>
      <DatePicker
        id="date-picker"
        className="w-80 -translate-y-2.5 outline-none"
        selected={startDate}
        showTimeSelect={showTime}
        dateFormat={showTime ? 'MMMM d, yyyy h:mm aa' : 'MMMM d, yyyy'}
        onChange={(date) => setStartDate(date)}
      />
    </label>
  )
}
export default DateTimePicker
