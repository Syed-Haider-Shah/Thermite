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
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap justify-center gap-5 md:justify-start">
          <TicketDash />
          <section className="flex min-h-sm flex-row flex-wrap items-center justify-center gap-7 overflow-x-auto bg-transparent p-4 md:bg-white md:shadow-xl">
            <QuickAssign />
            <ColumnChart />
          </section>
        </div>
        <div className="flex h-full w-full flex-wrap justify-center gap-5  md:justify-start">
          <TicketChart />
          <section className="flex flex-wrap justify-center bg-white pr-8 shadow-xl md:justify-between">
            <TopTowns />
            <WaterSampleAccess />
          </section>
        </div>
      </div>
    </>
  )
}
