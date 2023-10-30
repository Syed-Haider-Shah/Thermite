import Head from 'next/head'

import { DropDown, Filter, Magnifier, PageHeader, TextArea } from '@/components'

const details = [
  'Parent ticket details',
  'serial numbers of panel',
  'Location',
  'Under Warranty',
  'Ticket Creation date',
  'Ticket status option',
  'Location',
  'Under Warranty',
  'Ticket Creation date',
  'Ticket status option',
  'Ticket Creation date',
  'Ticket status option'
]

const faults = [
  {
    option: 'Server',
    value: 'SV'
  }
]

const ChildById = () => {
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
      <article id="child-ticket" className="w-full flex mt-6">
        <section
          id="ticket-information"
          className="h-full max-w-3xl w-full px-9 space-y-4 border-r border-black"
        >
          <h1 className="text-2xl font-semibold text-black">
            Ticket Information
          </h1>
          <ul className="grid grid-cols-2 h-full gap-y-14 content-start py-6">
            {details.map((detail) => (
              <li key={detail}>
                <h1 className="text-darkGray text-xl font-semibold">
                  {detail}
                </h1>
                <p className="text-gray font-normal">sample data</p>
              </li>
            ))}
          </ul>
        </section>
        <form id="close-ticket" className="max-w-2xl w-full px-9 space-y-10">
          <h1 className="text-2xl font-semibold text-black">Close Ticket</h1>
          <DropDown
            defaultOption="Select Fault"
            title="GUI Fault"
            options={faults}
          />
          <DropDown
            defaultOption="Select Resolution"
            title="Resolution"
            options={faults}
          />
          <DropDown defaultOption="Select Part" title="Part" options={faults} />
          <TextArea
            title="Description"
            rows={3}
            placeholder="write description"
          />
        </form>
      </article>
    </>
  )
}

export default ChildById
