import { Table } from '@/components'
import { supabase } from '@/services/supabase'

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
//test data, to check the scroll, can be removed
const rows = [
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  },
  {
    id: '1',
    serial_number: '222',
    address: 'home',
    coordinates: '132,13',
    installation_date: '1999',
    number_of_panels: '66',
    region: 'NSW'
  }
]

const Home = async ({
  searchParams
}: {
  searchParams?: { [key: string]: string | undefined }
}) => {
  const { data } = await supabase.from('Customers').select()
  return <Table cols={cols} rows={data} searchParams={searchParams} />
}

export default Home
