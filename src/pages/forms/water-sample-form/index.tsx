import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  ComboBox,
  DatePicker,
  RadioButton,
  TextArea
} from '@/components'
import { supabase } from '@/services/supabase'
import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

const WaterForm = () => {
  const [ticketList, setTicketList] = useState<IRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')

  const fetchTickets = useCallback(async (search: string) => {
    setIsLoading(true)

    const { data, error } = await supabase
      .rpc('get_parent_tickets')
      .eq('status', 'WATER-SAMPLE')
      .ilike('address', `%${search}%`)
      .select('address, status, id')

    setIsLoading(false)

    if (data) setTicketList(data)
    else if (error) toast.error(error.message)
  }, [])

  const handleSelect = useCallback((val: string) => {
    setSelected(val)
    setTicketList([])
  }, [])

  const handleSubmit = useCallback(() => {
    selected // contains the ID of the parent ticket
  }, [selected])

  return (
    <div className=" mx-20 h-screen w-form bg-white shadow-lg">
      <div className="m-10 ml-40 mt-24 text-xl font-bold text-darkIndigo">
        Water Sample Form
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid h-20 w-4/5 grid-cols-2 place-items-center gap-10"
      >
        <ComboBox
          title="Ticket Name"
          items={ticketList}
          field="address"
          isLoading={isLoading}
          onSearch={fetchTickets}
          onSelect={handleSelect}
        />
        <ComboBox title="Region" items={[]} field="region" />
        <ComboBox title="Panel Generation" items={[]} field="panel" />
        <div className="flex w-full flex-col justify-center gap-2 pl-1">
          <div className="flex text-sm">
            Where did you collect the sample from?
          </div>
          <div className="flex gap-5 pl-1 text-xs">
            <RadioButton name="HUB" />
            <RadioButton name="SPOKE" />
            <RadioButton name="BOTH" />
          </div>
        </div>
        <DatePicker id="date-picker1" title="Water Test Vial Expiration Date" />
        <DatePicker
          id="date-picker2"
          title="Water Test Sample Date & Time"
          showTime
        />
        <DatePicker
          id="date-picker3"
          title="Water Test Read Date & Time"
          showTime
        />
        <ComboBox title="Water Test Sample Result" items={[]} field="" />
        <div className="flex w-full flex-col gap-2 ">
          <div className="text-md w-fit bg-white px-1 font-bold">
            Standard Water Test Results Image (No UV Black Light)
          </div>
          <div className="flex items-center gap-5">
            <button className="rounded bg-loadBlue p-2 text-sm text-white">
              Upload Water Sample
            </button>
            <div className="text-gray">No File Chosen</div>
          </div>
        </div>
        <fieldset
          className={cn(
            'box-border w-full rounded-lg border-4',
            'border-loadGray focus-within:border-loadBlue'
          )}
        >
          <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
            Comments
          </div>
          <TextArea id="ticket" placeholder="Select a Ticket" custForm />
        </fieldset>
        <Button
          type="submit"
          className="col-span-2 w-1/2 rounded bg-loadBlue p-2 font-bold text-white"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  )
}

export default WaterForm
