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
      <div className="ml-10 mt-2 flex h-200 w-62 flex-col gap-5">
        <section className="flex h-full w-full flex-col justify-between bg-white shadow-xl">
          <div className="mt-15 flex flex-col items-center justify-center">
            <div className="text-xl font-bold">23</div>
            <div className="text-sm text-gray">Assigned Tickets</div>
          </div>
          <div className="mt- px-8 text-xs text-white">
            <button className="flex w-full justify-between rounded-5 bg-darkIndigo p-3 px-8 font-bold hover:shadow-xl">
              <div>TAKE ME TO TICKETS</div>
              <div>LL</div>
            </button>
          </div>
          <div className="flex justify-center gap-16 border-t-2 border-vLightIndigo text-xs text-gray">
            <div className="my-6 flex flex-col gap-2">
              <div className="flex gap-1">
                <div>Assigned Tickets:</div>
                <div className="font-bold text-black">23</div>
              </div>
              <div className="flex w-full bg-loadGray">
                <div className="h-1 w-[75%] bg-indigo"></div>
              </div>
            </div>
            <div className="my-6 flex flex-col gap-2">
              <div className="flex gap-1">
                <div>Closed Tickets:</div>
                <div className="font-bold text-black">12</div>
              </div>
              <div className="flex w-full bg-loadGray">
                <div className="h-1 w-[60%] bg-loadYellow"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex h-full w-full flex-col items-center justify-between bg-white p-6 shadow-xl">
          <div className="p-1 text-sm text-black">Assigned Ticket Details</div>
          <div>Loading Bar</div>
          <div className="flex w-full flex-col text-sm">
            <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
              <div className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-5 bg-darkIndigo">
                  <div className="h-[60%] w-[60%] rounded-5 bg-white"></div>
                </div>
                <div className="font-bold">Open Tickets</div>
              </div>
              <div>
                <div className="text-gray">60%</div>
              </div>
            </div>
            <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
              <div className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-5 bg-loadGreen">
                  <div className="h-[60%] w-[60%] rounded-5 bg-white"></div>
                </div>
                <div className="font-bold">Water Sample Required</div>
              </div>
              <div>
                <div className="text-gray">10%</div>
              </div>
            </div>
            <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
              <div className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-5 bg-loadYellow">
                  <div className="h-[60%] w-[60%] rounded-5 bg-white"></div>
                </div>
                <div className="font-bold">Closed Tickets</div>
              </div>
              <div>
                <div className="text-gray">30%</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
