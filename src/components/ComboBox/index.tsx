import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import FormLine from '../FormLine'

const ComboBox = ({ items }: { items: IRow[] }) => (
  <div
    id="dropdown-menu"
    className="right-0 mt-2 w-full space-y-1 rounded-md bg-white p-1"
  >
    <fieldset
      className={cn(
        'box-border h-1/2 w-[90%] rounded-lg border-4',
        'border-loadGray focus-within:border-loadBlue'
      )}
    >
      <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
        Ticket Name
      </div>
      <FormLine id="ticket" placeholder="Select a Ticket" cusForm />
    </fieldset>

    {items.map((item) => (
      <div
        key={`${item}`}
        className="text-gray-700 hover:bg-gray-100 active:bg-blue-100 block cursor-pointer rounded-md px-4 py-2"
      >
        Uppercase
      </div>
    ))}
  </div>
)

export default ComboBox
