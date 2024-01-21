import { useParams, useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import {
  Button,
  ComboBox,
  DatePicker,
  DropDown,
  RadioButton,
  TextArea
} from '@/components'
import FormLine from '@/components/FormLine'
import { Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { cn } from '@/utils/cn'
import { CreateChildSchema } from '@/utils/yupConfig'

const FAULT = [
  { name: 'Air Filter Server', value: 'air-filter-server' },
  {
    name: 'Ambient RH Sensor Failure',
    value: 'ambient-rh-sensor-failure'
  },
  {
    name: 'Battery Charger Failure',
    value: 'battery-charger-failure'
  },
  {
    name: 'Battery Disconnected',
    value: 'battery-disconnected'
  },
  {
    name: 'Battery Not Charging',
    value: 'battery-not-charging'
  },
  {
    name: 'Battery Voltage Low',
    value: 'Battery Voltage Low'
  }
]
const SOURCES = [{ name: 'Python', value: 'python' }]
const INDICATED_FAILURES = [
  { name: 'Carbon Polishing Filter', value: 'carbon-polishing-filter' }
]

type IChildFields = {
  customerimpact: boolean
  description: string
  upgrade: boolean
  customerinquiry: boolean
}

const CreateTicket = () => {
  const [fault, setFault] = useState<IOption>(FAULT[0])
  const [source, setSource] = useState<IOption>(SOURCES[0])
  const [failure, setFailure] = useState<IOption>(INDICATED_FAILURES[0])
  const [outageDate, setOutageDate] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const { pid } = useParams() || {
    pid: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CreateChildSchema),
    mode: 'onBlur',
    defaultValues: {
      customerimpact: false,
      customerinquiry: false,
      description: '',
      upgrade: false
    }
  })

  const handleCreateChild = useCallback(
    async (data: IChildFields) => {
      if (!outageDate) {
        toast.error('Please Provide Outage Date')
        return
      }

      setIsLoading(true)
      const { error } = await supabase.rpc('create_child_ticket', {
        fault: fault.value,
        parentid: Number(pid),
        customerimpact: data.customerimpact,
        customerinquiry: data.customerinquiry,
        descriptionopen: data.description,
        upgrade: data.upgrade,
        indicatedfailure: failure.value,
        outagedate: outageDate.toISOString(),
        source: source.value
      })

      setIsLoading(false)

      if (error) toast.error(error.message)
      else router.back()
    },
    [outageDate, fault.value, pid, failure.value, source.value, router]
  )

  return (
    <Modal showModal title="Create Ticket" onClose={router.back}>
      <form onSubmit={handleSubmit(handleCreateChild)} className="space-y-5">
        <div className="mt-5 flex h-full flex-1 flex-wrap gap-2 rounded-5 bg-white px-5 py-8">
          <fieldset
            className={cn(
              'box-border w-full rounded-lg border-4',
              'border-loadGray focus-within:border-loadBlue'
            )}
          >
            <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
              Description
            </div>
            <TextArea id="ticket" custForm />
          </fieldset>
          <div className="mb-3 mt-6 flex w-full gap-20">
            <div className="flex items-start">
              <RadioButton name="Customer Impacting" />
            </div>
            <div className="flex items-start">
              <RadioButton name="Customer Inquiry" />
            </div>
            <div className="flex items-start">
              <RadioButton name="Upgrade" />
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-between">
            <div className="flex w-[45%] flex-col gap-2">
              <ComboBox title="Problem" items={[]} field="" />
              <DatePicker
                id="outtage"
                className="h-14"
                title="Outtage Start Date"
                showTime
              />
            </div>
            <div className="flex w-[45%] flex-col gap-4">
              <ComboBox title="Source" items={[]} field="" />
              <ComboBox title="Indicated Failure" items={[]} field="" />
            </div>
          </div>
        </div>
        <div className="mb-2 flex w-full justify-end pr-3">
          <Button type="submit" isLoading={isLoading} active>
            Create
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateTicket
