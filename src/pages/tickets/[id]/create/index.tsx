import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, TextArea } from '@/components'
import FormLine from '@/components/FormLine'
import { Modal } from '@/containers'
import { IOption } from '@/types/model'
import { CreateChildSchema } from '@/utils/yupConfig'

const PROBLEMS = [{ name: 'Problem', value: '' }]
const FAULTS = [{ name: 'Fault', value: '' }]
const SERIAL_NUMBERS = [{ name: 'Serial Number', value: '' }]

const CreateTicket = () => {
  const [problem, setProblem] = useState<IOption>(PROBLEMS[0])
  const [fault, setFault] = useState<IOption>(FAULTS[0])
  const [serialNumber, setSerialNumber] = useState<IOption>(SERIAL_NUMBERS[0])
  const router = useRouter()

  const {
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CreateChildSchema)
  })

  return (
    <Modal showModal title="Create Ticket" onClose={router.back}>
      <form className="space-y-5">
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
            <div className="flex">
              <h1 className="text-sm font-semibold text-black/90">
                Customer Impact
              </h1>
              <FormLine
                id="customer-impact"
                {...register('customerImpact')}
                error={errors.customerImpact?.message}
                primary
                className="translate-x-3 self-start"
                type="checkbox"
              />
            </div>
            <div className="flex">
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
          <Button type="submit" active>
            Create
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateTicket
