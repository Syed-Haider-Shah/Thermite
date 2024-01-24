import { ChangeEvent, Dispatch, SetStateAction } from 'react'

const RadioButton = ({
  name,
  setValue,
  value
}: {
  name?: string
  value: string
  setValue?: Dispatch<SetStateAction<string>>
}) => {
  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(event.target.value)
  }

  return (
    <div className="flex items-center gap-1">
      <label
        title="sample"
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[0.25rem] border-loadGray focus-within:border-loadBlue"
      >
        <input
          onChange={handleSelect}
          type="checkbox"
          title="sample"
          value={value}
          className="ring-cursor-pointer h-2 w-2 cursor-pointer appearance-none rounded-full bg-transparent accent-loadBlue ring-0 ring-loadBlue ring-offset-0 focus:bg-loadBlue focus:ring-2"
        ></input>
      </label>
      {name && <div className="text-[0.65rem]">{name}</div>}
    </div>
  )
}

export default RadioButton
