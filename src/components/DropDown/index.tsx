import classNames from 'classnames'

type IDropDown = {
  defaultOption: string
  title?: string
  className?: string
  options: {
    option: string
    value: string
  }[]
}

const DropDown = ({ defaultOption, options, title, className }: IDropDown) => {
  return (
    <label
      htmlFor={title}
      className={classNames(
        'block gap-y-1.5 text-darkGray text-xl font-semibold',
        className
      )}
    >
      {title}
      <select
        id={title}
        className="bg-gray-50 w-full text-sm block border border-black/40 outline-none p-2.5 rounded-lg"
      >
        <option selected>{defaultOption}</option>
        {options.map(({ option, value }) => (
          <option key={value} value={value}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
export default DropDown
