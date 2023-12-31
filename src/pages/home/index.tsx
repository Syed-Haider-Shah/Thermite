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
        <div className="mb-2 text-sm text-gray">App Activities at a Glance</div>
      </div>
      <div className="flex h-md">
        <div className="ml-10 flex h-full w-62 flex-col gap-5">
          <section className="flex h-full w-full flex-col justify-between bg-white shadow-xl">
            <div className="mt-15 flex flex-col items-center justify-center">
              <div className="mt-2 text-xl font-bold">23</div>
              <div className="text-sm text-gray">Assigned Tickets</div>
            </div>
            <div className="px-8 text-xs text-white">
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
          <section className="flex h-full w-full flex-col items-center justify-between bg-white shadow-xl">
            <div className="p-7 text-sm text-black">
              Assigned Ticket Details
            </div>
            <div>Loading Bar</div>
            <div className="flex w-full flex-col p-6 text-sm">
              <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-5 bg-indigo">
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
        <div className="w-261 ml-5 flex h-full flex-col gap-5">
          <section className="flex h-full w-full justify-between bg-white shadow-xl">
            <div className="h-full w-[60%]">
              <div className="p-12 pt-10 text-gray">
                TOP TOWNS WITH PENDING WORK
              </div>
              <div className="px-12">
                <div className="flex flex-col">
                  <div className="text-sm">WALGETT</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="h-1 w-[80%] bg-red"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">80%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">LIGHTNING RIDGE</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="h-1 w-[70%] bg-loadYellow"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">70%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">BOURKE</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="h-1 w-[60%] bg-indigo"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">60%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">COBAR</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="bg-loadBlue h-1 w-[40%]"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">40%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">BROKEN HILL</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="h-1 w-[30%] bg-loadGreen"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">30%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-[40%] items-center justify-center">
              <div className="h-[95%] w-[95%] rounded-md bg-darkIndigo"></div>
            </div>
          </section>
          <section className="flex h-full w-full flex-col justify-between bg-white shadow-xl"></section>
        </div>
      </div>
    </>
  )
}
