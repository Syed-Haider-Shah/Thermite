//This should be for child ticket

import { useRouter } from 'next/navigation'

import { Button, DropDown, TextArea } from '@/components'
import FormLine from '@/components/FormLine'
import { Modal } from '@/containers'

const CreateTicket = () => {
  const router = useRouter()

  return (
    <Modal showModal title="Create Ticket" onClose={router.back}>
      <form className="space-y-5">
        <div className="mt-5 flex flex-1 flex-wrap gap-6 rounded-5 bg-lightGray p-5">
          <FormLine
            required
            title="Title"
            id="title"
            className="w-sm"
            primary
          />
          <TextArea
            required
            id="description"
            title="Description"
            className="w-sm resize-none"
            rows={4}
            primary
          />
          <FormLine
            id="customer-impact"
            title="Customer Impact"
            primary
            required
            className="relative right-1/2 w-sm translate-x-3 self-start"
            type="checkbox"
          />
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
          <div>
            <h1 className="text-sm font-semibold text-black/90">Status</h1>
            <DropDown
              options={[{ name: 'Open', value: '' }]}
              name="status"
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
