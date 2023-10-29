import Head from 'next/head'

import { Filter, Magnifier, PageHeader, Table, Tabs } from '@/components'

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
      <Tabs tabs={['Details', 'Notes']}>
        <section id="details" className="w-full">
          <ul className="grid grid-cols-3 h-full gap-y-10 content-start place-content-between">
            <li>
              <h1 className="text-darkGray text-xl font-semibold">
                Parent ticket details
              </h1>
              <p className="text-gray font-normal">sample data</p>
            </li>
            <li>
              <h1 className="text-darkGray text-xl font-semibold">
                Parent ticket details
              </h1>
              <p className="text-gray font-normal">sample data</p>
            </li>
            <li>
              <h1 className="text-darkGray text-xl font-semibold">
                Parent ticket details
              </h1>
              <p className="text-gray font-normal">sample data</p>
            </li>
            <li>
              <h1 className="text-darkGray text-xl font-semibold">
                Parent ticket details
              </h1>
              <p className="text-gray font-normal">sample data</p>
            </li>
            <li>
              <h1 className="text-darkGray text-xl font-semibold">
                Parent ticket details
              </h1>
              <p className="text-gray font-normal">sample data</p>
            </li>
            <li>
              <h1 className="text-darkGray text-xl font-semibold">
                Parent ticket details
              </h1>
              <p className="text-gray font-normal">sample data</p>
            </li>
          </ul>
        </section>
      </Tabs>
      <section id="parent-tickets" className="w-full py-3 space-y-4 mt-4">
        <h1 className="text-xl font-semibold text-black px-9">
          All child tickets (total count)
        </h1>
        <Table cols={cols} rows={rows} />
      </section>
    </>
  )
}

export default TicketById
