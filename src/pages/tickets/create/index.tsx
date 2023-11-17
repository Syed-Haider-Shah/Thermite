import { useRouter } from 'next/navigation'

import { Button, SearchBar, Table } from '@/components'
import { Modal } from '@/containers'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'address',
    name: 'Address'
  },
  {
    field: 'region',
    name: 'Region'
  }
]

const CreateParentTicket = () => {
  const router = useRouter()

  return (
    <Modal showModal title="Create Parent Ticket" onClose={router.back}>
      <form className="relative space-y-5 rounded-xl pb-14 pt-5">
        <SearchBar placeholder="Search for Customers" />
        <Table cols={cols} rows={[]} />
        <Button active className="absolute right-0">
          Create
        </Button>
      </form>
    </Modal>
  )
}

export default CreateParentTicket
