import { Table } from '@/components'
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

const Home = async () => {
  const { data: rows } = (await supabase.from('Customers').select()) as {
    data: ICustomers[]
  }

  return <Table cols={cols} rows={rows} />
}

export default Home
