import { Filter, Magnifier, PageHeader, Table } from '@/components'

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

const ParentTicket = () => {
  return (
    <>
      <PageHeader title="All Tickets total count (61)">
        <Magnifier />
        <Filter />
      </PageHeader>
      <section id="parent-tickets" className="w-full bg-white py-3">
        <Table cols={cols} rows={rows} />
      </section>
    </>
  )
}
export default ParentTicket
