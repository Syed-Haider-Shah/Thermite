import Link from 'next/link'

import { Button, Card, DropDown, PageNav, Table, UnionIcon } from '@/components'
import { Paths } from '@/constants'
import { TicketDetails } from '@/containers'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'serial_number',
    name: 'Serial Number'
  },
  {
    field: 'address',
    name: 'Address'
  },
  {
    field: 'region',
    name: 'Region'
  },
  {
    field: 'coordinates',
    name: 'Coordinates'
  },
  {
    field: 'installation_date',
    name: 'Installation Date'
  },
  {
    field: 'number_of_panels',
    name: 'Number of Panels'
  }
]
const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'active', name: 'Active' },
  { value: 'completed', name: 'Completed' }
]
const Tickets = () => {
  return (
    <>
      <TicketDetails />
      <Card>
        <div className="flex flex-row-reverse gap-2">
          <Link href={`${Paths.TICKET_CREATE}`}>
            <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Child Ticket
            </Button>
          </Link>
          <DropDown options={OPTIONS} name="category" />
        </div>
        <Table cols={cols} rows={[]} />
        <PageNav pageCount={5} />
      </Card>
    </>
  )
}
export default Tickets
