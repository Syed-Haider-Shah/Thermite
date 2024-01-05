const Toggle = ({
  onChange,
  isChecked
}: {
  onChange?: (val: boolean) => void
  isChecked: boolean
}) => (
  <label
    htmlFor="checkbox"
    className="flex cursor-pointer select-none items-center gap-2 rounded-2.5 border border-black/5 px-2 transition-colors hover:bg-lightGray"
  >
    Show Closed
    <div className="relative">
      <input
        id="checkbox"
        title="Checkbox"
        type="checkbox"
        onChange={(event) => onChange && onChange(event.target.checked)}
        className="peer sr-only"
      />
      <div className="block h-8 w-16 rounded-full bg-[#E5E7EB] p-2 py-1.5 text-right text-sm font-bold transition-colors peer-checked:bg-indigo peer-checked:text-left peer-checked:text-white">
        {isChecked ? 'OFF' : 'ON'}
      </div>
      <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ease-in-out peer-checked:translate-x-8" />
    </div>
  </label>
)

export default Toggle
