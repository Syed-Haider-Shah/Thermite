import Head from 'next/head'

import { ColumnChart } from '@/components'
import { TicketChart } from '@/containers'
import QuickAssign from '@/containers/QuickAssign'
import TicketDash from '@/containers/TicketDash'
import TopTowns from '@/containers/TopTowns'
import WaterSampleAccess from '@/containers/WaterSampleAccess'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="">
        <div className="text-xl font-bold text-darkIndigo">
          Analytics / Reporting
        </div>
        <div className="mb-2 text-sm text-gray">App Activities at a Glance</div>
      </div>
      <div className="flex h-md">
        <div className=" flex h-full w-62 flex-col gap-5">
          <TicketDash />
          <TicketChart />
        </div>
        <div className="ml-5 flex h-full w-full max-w-screen-lg flex-col gap-5">
          <section className="grid h-full w-full grid-cols-3 items-center gap-7 bg-white pl-4 shadow-xl">
            <QuickAssign />
            <ColumnChart />
          </section>
          <section className="flex h-full w-full justify-between bg-white shadow-xl">
            <TopTowns />
            <WaterSampleAccess />
          </section>
        </div>
      </div>
    </>
  )
}
