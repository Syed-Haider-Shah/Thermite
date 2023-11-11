import Head from 'next/head'

import { Filter, Magnifier, PageHeader, Table } from '@/components'
import { supabase } from '@/services/supabase'

const cols = [
  'Serial Number',
  'Address',
  'Location (Co-ordinates)',
  'Under Warranty',
  'Region',
  'Contact'
]
const rows = [
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  },
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  },
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  },
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  },
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  },
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  },
  {
    serialNo: '1',
    address: 'Karachi',
    ticketNo: '1',
    childCount: '10',
    region: 'NSW',
    assignedTo: 'EMP1'
  }
]

const Customers = () => {
  console.log(supabase)
  return (
    <>
      <Head>
        <title>Customers | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader title="All Tickets total count (61)">
        <Magnifier />
        <Filter />
      </PageHeader>
      <section id="customers" className="w-full py-3">
        <Table cols={cols} rows={rows} />
      </section>
    </>
  )
}

export default Customers
