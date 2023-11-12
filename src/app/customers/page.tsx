import { Button, DropDown, SearchBar, Table, UnionIcon } from '@/components'
import PageNav from '@/components/PageNav'
import { supabase } from '@/services/supabase'
import { ICustomers } from '@/types/supabaseTables'

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

const Customers = async () => {
  const { data: rows } = (await supabase
    .from('Customers')
    .select()
    .limit(10)) as {
    data: ICustomers[]
  }

  return (
    <article className="flex flex-col gap-5">
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Customers" />
        <div className="flex gap-x-2">
          <DropDown options={OPTIONS} name="category" />
          <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
            <UnionIcon />
            New Customer
          </Button>
        </div>
      </div>
      <Table cols={cols} rows={rows} />
      <PageNav pageCount={5} />
    </article>
  )
}

export default Customers
