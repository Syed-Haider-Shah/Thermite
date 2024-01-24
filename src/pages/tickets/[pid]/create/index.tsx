import { useParams, useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DatePicker, DropDown, TextArea } from '@/components'
import FormLine from '@/components/FormLine'
import { Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
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
const SOURCES = [
  { name: 'CHAT', value: 'chat' },
  { name: 'EMAIL', value: 'email' },
  { name: 'FORM', value: 'form' },
  { name: 'PHONE', value: 'phone' },
  { name: 'SGP', value: 'sgp' },
  { name: 'Field App', value: 'field-app' },
  { name: 'NOC', value: 'noc' },
  { name: 'Site Review', value: 'site-review' },
  { name: 'Python', value: 'python' },
  { name: 'Support Portal', value: 'support-portal' },
  { name: 'Customer Phone', value: 'customer-phone' }
]
const INDICATED_FAILURES = [
  { name: 'Acoustic Box - H', value: '' },
  { name: 'Air Filter - F', value: '' },
  { name: 'Battery (E/F/FP) 070-0035-00', value: '' },
  { name: 'CAN Cable - G', value: '' },
  { name: 'Condenser Flowmeter - G', value: '' },
  { name: 'Condenser Pump Assmbly, Clocking Flowmeter', value: '' },
  { name: 'Condenser Supply Hose', value: '' }
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
        indicatedfailure: failure.name,
        outagedate: outageDate.toISOString(),
        source: source.value
      })

      setIsLoading(false)

      if (error) toast.error(error.message)
      else router.back()
    },
    [outageDate, fault.value, pid, failure.name, source.value, router]
  )

  return (
    <Modal showModal title="Create Ticket" onClose={router.back}>
      <form onSubmit={handleSubmit(handleCreateChild)} className="space-y-5">
        <div className="mt-5 flex h-full flex-1 flex-wrap rounded-5 bg-lightGray px-5 py-8">
          <TextArea
            required
            id="description"
            title="Description"
            {...register('description')}
            error={errors.description?.message}
            className="w-sm resize-none text-black/60"
            rows={4}
            primary
          />
          <div className="mb-3 mt-6 flex w-full gap-20">
            <div className="flex items-start">
              <h1 className="-translate-y-0.5 text-sm font-semibold text-black/90">
                Customer Impact
              </h1>
              <FormLine
                id="customer-impact"
                {...register('customerimpact')}
                error={errors.customerimpact?.message}
                primary
                className="translate-x-3 self-start"
                type="checkbox"
              />
            </div>
            <div className="flex items-start">
              <h1 className="-translate-y-0.5 text-sm font-semibold text-black/90">
                Customer Inquiry
              </h1>
              <FormLine
                id="customer-inquiry"
                {...register('customerinquiry')}
                error={errors.customerinquiry?.message}
                primary
                className="translate-x-3 self-start"
                type="checkbox"
              />
            </div>
            <div className="flex items-start">
              <h1 className="-translate-y-0.5 text-sm font-semibold text-black/90">
                Upgrade
              </h1>
              <FormLine
                id="upgrade"
                {...register('upgrade')}
                error={errors.upgrade?.message}
                primary
                className="translate-x-3 self-start"
                type="checkbox"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6">
            <DropDown
              title="Problem"
              setValue={setFault}
              value={fault}
              options={FAULT}
              className="w-80"
            />
            <DropDown
              title="Source"
              setValue={setSource}
              value={source}
              options={SOURCES}
              className="w-80"
            />
            <DatePicker
              title="Outage Start Date"
              className="w-80"
              setDate={setOutageDate}
              date={outageDate}
              id="outage"
            />
            <DropDown
              title="Indicated Failure"
              setValue={setFailure}
              value={failure}
              options={INDICATED_FAILURES}
              className="w-80"
            />
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
