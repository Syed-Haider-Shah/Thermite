import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="ml-10">
        <div className="text-xl font-bold">Analytics / Reporting</div>
        <div className="text-sm text-gray">App Activities at a Glance</div>
      </div>
      <div className="h-200 ml-10 mt-2 flex w-80 flex-col gap-5">
        <section className="flex h-full w-full flex-col justify-between bg-white shadow-lg">
          <div className="mt-15 flex flex-col items-center justify-center">
            <div className="text-xl font-bold">23</div>
            <div className="text-sm text-gray">Assigned Tickets</div>
          </div>
          <div className="mt- px-8 text-xs text-white">
            <button className="flex w-full justify-between rounded-5 bg-darkIndigo p-3 px-8 hover:shadow-lg">
              <div>TAKE ME TO TICKETS</div>
              <div>LL</div>
            </button>
          </div>
          <div className="flex justify-center gap-16 border-t-2 border-vLightIndigo text-xs text-gray">
            <div className="my-6">
              <div>Assigned Tickets: 23</div>
              <div>Loading</div>
            </div>
            <div className="my-6">
              <div>Closed Tickets: 23</div>
              <div>Loading</div>
            </div>
          </div>
        </section>
        <div className="h-full w-full bg-white"></div>
      </div>
    </>
  )
}
