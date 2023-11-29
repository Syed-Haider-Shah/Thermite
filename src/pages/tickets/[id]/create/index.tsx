import { useParams, useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, TextArea } from '@/components'
import FormLine from '@/components/FormLine'
import { Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { CreateChildSchema } from '@/utils/yupConfig'

const PROBLEMS = [{ name: 'Problem', value: '' }]
const FAULTS = [{ name: 'Fault', value: '' }]
const SERIAL_NUMBERS = [{ name: 'Serial Number', value: '' }]

type IChildFields = {
  customerimpact: boolean
  description: string
  upgrade: boolean
  customerinquiry: boolean
}

const CreateTicket = () => {
  const [problem, setProblem] = useState<IOption>(PROBLEMS[0])
  const [fault, setFault] = useState<IOption>(FAULTS[0])
  const [serialNumber, setSerialNumber] = useState<IOption>(SERIAL_NUMBERS[0])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const { id } = useParams() || {
    id: ''
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
      setIsLoading(true)
      const { error } = await supabase.rpc('create_child_ticket', {
        ...data,
        fault: fault.value,
        parentid: Number(id),
        problem: problem.value,
        serial: serialNumber.value,
        datecreated: new Date().toISOString()
      })

      setIsLoading(false)

      if (error) toast.error(error.message)
      else router.back()
    },
    [fault.value, id, problem.value, router, serialNumber.value]
  )

  return (
    <Modal showModal title="Create Ticket" onClose={router.back}>
      <form onSubmit={handleSubmit(handleCreateChild)} className="space-y-5">
        <div className="mt-5 flex flex-1 flex-wrap gap-6 rounded-5 bg-lightGray p-5">
          <TextArea
            required
            id="description"
            title="Description"
            {...register('description')}
            error={errors.description?.message}
            className="w-sm resize-none"
            rows={4}
            primary
          />
          <div className="flex w-full gap-20">
            <div className="flex items-end">
              <h1 className="text-sm font-semibold text-black/90">
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
            <div className="flex items-end">
              <h1 className="text-sm font-semibold text-black/90">
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
            <div className="flex items-end">
              <h1 className="text-sm font-semibold text-black/90">Upgrade</h1>
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
          <DropDown
            title="Problem"
            setValue={setProblem}
            value={problem}
            options={PROBLEMS}
            className="w-80"
          />
          <DropDown
            title="Fault"
            value={fault}
            setValue={setFault}
            options={FAULTS}
            className="w-80"
          />
          <DropDown
            title="Serial Number"
            setValue={setSerialNumber}
            value={serialNumber}
            options={[{ name: 'Serial No', value: '' }]}
            className="w-80"
          />
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
