const Toggle = ({
  onChange,
  isChecked
}: {
  onChange?: (val: boolean) => void
  isChecked: boolean
}) => (
  <label
    htmlFor="checkbox"
    className="mr-2 flex cursor-pointer select-none items-center gap-2 rounded-2.5 px-2 text-sm text-gray transition-colors hover:bg-lightGray"
  >
    <div className="">
      <input
        id="checkbox"
        title="Checkbox"
        type="checkbox"
        onChange={(event) => onChange && onChange(event.target.checked)}
        className="peer sr-only"
      />
      <div className="block h-4 w-10 rounded-full bg-gray p-2 py-1.5 text-right text-sm font-bold transition-colors peer-checked:bg-darkIndigo peer-checked:text-left peer-checked:text-white">
        {isChecked ? '' : ''}
      </div>
      <div className="dot absolute h-6 w-6 -translate-y-5 rounded-full border-[1px] bg-white shadow-lg transition ease-in-out peer-checked:translate-x-5" />
    </div>
    Show Closed
  </label>
)

export default Toggle
