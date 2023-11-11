import { Table } from '@/components'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'Serial Number',
    name: 'Serial Number'
  },
  {
    field: 'Address',
    name: 'Address'
  },
  {
    field: 'Coordinates',
    name: 'Coordinates'
  },
  {
    field: 'Installation Date',
    name: 'Installation Date'
  },
  {
    field: 'Number of Panels',
    name: 'Number of Panels'
  }
]

const rows = [
  {
    id: '1',
    'Serial Number': 'H-7144',
    Address: 'AU.NSW.Armidale:WPA.NSWS-Drummond-Memorial-Public-School',
    Coordinates: 'null',
    'Installation Date': 'null',
    'Number of Panels': '1'
  },
  {
    id: '1',
    'Serial Number': 'H-7144',
    Address: 'AU.NSW.Armidale:WPA.NSWS-Drummond-Memorial-Public-School',
    Coordinates: 'null',
    'Installation Date': 'null',
    'Number of Panels': '1'
  },
  {
    id: '1',
    'Serial Number': 'H-7144',
    Address: 'AU.NSW.Armidale:WPA.NSWS-Drummond-Memorial-Public-School',
    Coordinates: 'null',
    'Installation Date': 'null',
    'Number of Panels': '1'
  },
  {
    id: '1',
    'Serial Number': 'H-7144',
    Address: 'AU.NSW.Armidale:WPA.NSWS-Drummond-Memorial-Public-School',
    Coordinates: 'null',
    'Installation Date': 'null',
    'Number of Panels': '1'
  }
]

const Home = ({
  searchParams
}: {
  searchParams?: { [key: string]: string | undefined }
}) => {
  return <Table cols={cols} rows={rows} searchParams={searchParams} />
}

export default Home
