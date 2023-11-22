import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, TextArea } from '@/components'
import FormLine from '@/components/FormLine'
import { Modal } from '@/containers'
import { CreateChildSchema } from '@/utils/yupConfig'

const CreateTicket = () => {
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
          <div>
            <h1 className="text-sm font-semibold text-black/90">Problem</h1>
            <DropDown
              options={[{ name: 'Problem', value: '' }]}
              name="problem"
              className="w-80"
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-black/90">Fault</h1>
            <DropDown
              options={[{ name: 'Fault', value: '' }]}
              name="pault"
              className="w-80"
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-black/90">
              Serial Number
            </h1>
            <DropDown
              options={[{ name: 'Serial No', value: '' }]}
              name="serial_number"
              className="w-80"
            />
          </div>
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
