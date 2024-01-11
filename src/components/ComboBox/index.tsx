import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import FormLine from '../FormLine'

const ComboBox = ({ items, title }: { items: IRow[]; title: string }) => (
  <div
    id="dropdown-menu"
    className="right-0 mt-2 w-full space-y-1 rounded-md bg-white p-1"
  >
    <fieldset
      className={cn(
        'box-border rounded-lg border-4',
        'border-loadGray focus-within:border-loadBlue'
      )}
    >
      <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
        {title}
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
