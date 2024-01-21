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
    <div className=" max-w-form flex h-auto flex-col bg-white pb-20 shadow-lg md:mx-20">
      <div className="m-10 mt-24 flex flex-wrap text-xl font-bold text-darkIndigo md:ml-40">
        Water Sample Form
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex h-full w-4/5 flex-col items-center gap-8 bg-white "
      >
        <div className="flex w-full flex-wrap justify-between space-y-8 bg-white md:space-y-0">
          <div className="flex min-w-[16rem] flex-col gap-8 md:w-[32rem]">
            <ComboBox
              title="Ticket Name"
              placeholder="Select a Ticket"
              items={ticketList}
              field="address"
              isLoading={isLoading}
              onSearch={fetchTickets}
              onSelect={handleSelect}
            />
            <ComboBox
              title="Panel Generation"
              placeholder="Select Generation"
              items={[]}
              field="panel"
            />
            <DatePicker
              id="date-picker1"
              title="Water Test Vial Expiration Date"
            />
            <DatePicker
              id="date-picker3"
              title="Water Test Read Date & Time"
              showTime
            />
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
          </div>
          <div className="flex min-w-[20rem] flex-col gap-8 md:w-[32rem]">
            <ComboBox
              title="Region"
              items={[]}
              field="region"
              placeholder="Select Region"
            />
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
            <DatePicker
              id="date-picker2"
              title="Water Test Sample Date & Time"
              showTime
            />
            <ComboBox
              title="Water Test Sample Result"
              placeholder="Select Result"
              items={[]}
              field=""
            />
            <fieldset
              className={cn(
                'box-border w-full rounded-lg border-4',
                'border-loadGray focus-within:border-loadBlue'
              )}
            >
              <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                Comments
              </div>
              <TextArea id="ticket" placeholder="Add Description" custForm />
            </fieldset>
          </div>
        </div>

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
