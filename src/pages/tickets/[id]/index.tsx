import Head from 'next/head'
import { useSearchParams } from 'next/navigation'

import { useMemo } from 'react'

import {
  Filter,
  Magnifier,
  PageHeader,
  ParentDetails,
  ParentNotes,
  Table,
  Tabs
} from '@/components'

const cols = [
  'Serial Number',
  'Ticket Number',
  'Address',
  'Number of Child Tickes',
  'Assigned To',
  'Status'
]
const rows = [
  {
    serialNo: '1',
    ticketNo: '1',
    address: 'Karachi',
    childCount: '10',
    assignedTo: 'EMP1',
    status: 'active'
  },
  {
    serialNo: '1',
    ticketNo: '1',
    address: 'Karachi',
    childCount: '10',
    assignedTo: 'EMP1',
    status: 'active'
  },
  {
    serialNo: '1',
    ticketNo: '1',
    address: 'Karachi',
    childCount: '10',
    assignedTo: 'EMP1',
    status: 'active'
  },
  {
    serialNo: '1',
    ticketNo: '1',
    address: 'Karachi',
    childCount: '10',
    assignedTo: 'EMP1',
    status: 'active'
  },
  {
    serialNo: '1',
    ticketNo: '1',
    address: 'Karachi',
    childCount: '10',
    assignedTo: 'EMP1',
    status: 'active'
  }
]

const TicketById = () => {
  const tab = useSearchParams().get('tab')

  const tabValue = useMemo(() => {
    switch (tab) {
      case 'Notes':
        return <ParentNotes />
      default:
        return <ParentDetails />
    }
  }, [tab])

  return (
    <>
      <Head>
        <title>Home | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader title="R10987ETYRH">
        <h2>Child Tickets (61)</h2>
        <button type="button">create child ticket</button>
        <Magnifier />
        <Filter />
      </PageHeader>
      <Tabs tabs={['Details', 'Notes']}>{tabValue}</Tabs>
      <section id="parent-tickets" className="w-full py-3 mt-10 space-y-4">
        <h1 className="text-xl font-semibold text-black px-9">
          All child tickets (total count)
        </h1>
        <Table cols={cols} rows={rows} />
      </section>
    </>
  )
}

export default TicketById
