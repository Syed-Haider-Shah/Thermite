import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { cn } from '@/utils/cn'

type DatePickerProps = {
  showTime?: boolean
  className?: string
  setValue?: Dispatch<SetStateAction<Date>>
  titleBG?: string
  value?: Date
  id?: string
  title: string
}

const DatePicker: FC<DatePickerProps> = ({
  showTime,
  className,
  setValue,
  titleBG,
  value,
  id,
  title
}) => {
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!setValue || !value) return
    if (!event.target.value) {
      setValue(new Date())
      return
    }
    const date = new Date(value)
    const [year, month, day] = event.target.value.split('-').map(Number)
    date.setFullYear(year, month - 1, day)
    setValue(date)
  }

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!setValue || !value) return

    const date = new Date(value)
    const [hours, minutes] = event.target.value.split(':').map(Number)
    date.setHours(hours, minutes)
    setValue(date)
  }

  return (
    <fieldset
      className={cn(
        'box-border flex w-full flex-col rounded-lg border-4',
        'border-loadGray focus-within:border-loadBlue',
        { 'grid grid-cols-2 ': showTime },
        className
      )}
    >
      <label
        htmlFor={id}
        className={cn(
          'bg-inherit absolute w-fit -translate-y-3 translate-x-6 px-1 text-sm',
          titleBG
        )}
      >
        {title}
      </label>
      <input
        id={id}
        type="date"
        value={value?.toISOString().substring(0, 10)}
        onChange={handleDateChange}
        className={'rounded-md bg-transparent px-4 py-1.5 text-lg outline-none'}
      />
      {showTime && (
        <input
          title="Time"
          value={value?.toTimeString().substring(0, 5)}
          type="time"
          onChange={handleTimeChange}
          className="border-l bg-transparent px-4 text-lg outline-none"
        />
      )}
    </fieldset>
  )
}

export default DatePicker
