import { Button, DropDown, SearchBar, Table, UnionIcon } from '@/components'
import PageNav from '@/components/PageNav'

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

const Tickets = async () => {
  return (
    <article className="flex flex-col gap-5">
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Tickets" />
        <div className="flex gap-x-2">
          <DropDown options={OPTIONS} name="category" />
          <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
            <UnionIcon />
            New Parent Ticket
          </Button>
        </div>
      </div>
      <Table cols={cols} rows={[]} />
      <PageNav pageCount={5} />
    </article>
  )
}

export default Tickets
