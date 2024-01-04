import Head from 'next/head'
import Link from 'next/link'

import { RightArrow } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="ml-10">
        <div className="text-xl font-bold text-darkIndigo">
          Analytics / Reporting
        </div>
        <div className="mb-2 text-sm text-gray">App Activities at a Glance</div>
      </div>
      <div className="flex h-md">
        <div className="ml-10 flex h-full w-62 flex-col gap-5">
          <section className="flex h-full w-full flex-col justify-between bg-white shadow-xl">
            <div className="mt-15 flex flex-col items-center justify-center">
              <div className="mt-2 text-2xl font-bold">23</div>
              <div className="text-sm text-gray">Assigned Tickets</div>
            </div>
            <div className="flex justify-center px-8 text-xs text-white">
              <Link
                href="/tickets"
                className="flex w-[80%] justify-between gap-2 rounded-5 bg-loadBlue p-3 px-8 font-bold hover:shadow-xl"
              >
                <div className="">TAKE ME TO TICKETS</div>
                <div className="">
                  <RightArrow />
                </div>
              </Link>
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
                  <div className="h-1 w-[30%] bg-loadYellow"></div>
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
        <div className="ml-5 flex h-full w-261 flex-col gap-5">
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
                      <div className="h-1 w-[80%] bg-loadGreen"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">80%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">LIGHTNING RIDGE</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="h-1 w-[70%] bg-loadBlue"></div>
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
                      <div className="h-1 w-[40%] bg-loadYellow"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">40%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">BROKEN HILL</div>
                  <div className="flex items-center">
                    <div className="flex w-full bg-loadGray">
                      <div className="h-1 w-[30%] bg-red/80"></div>
                    </div>
                    <div className="px-2 text-xs text-gray">30%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-[40%] items-center justify-center">
              <div className="flex h-[95%] w-[95%] flex-col justify-between overflow-hidden rounded-md bg-loadBlue">
                <Link
                  href="/"
                  className=" m-2 flex items-center justify-center rounded-md bg-white/10 p-4 text-white hover:shadow-lg"
                >
                  Water Sample Form
                </Link>
                <div className="flex flex-col items-center justify-center text-white">
                  <div className=" text-3xl font-bold">12</div>
                  <div className="text-sm">Submittions left</div>
                </div>
                <div className=" bg- flex h-[30%] border-t-[0.025rem] border-white/50">
                  <div className="flex w-[50%] flex-col items-center justify-center border-r-[0.025rem] border-white/50">
                    <div className="text-lg font-bold text-white">30%</div>
                    <div className="text-xs text-white">Submitted/Closed%</div>
                  </div>
                  <div className="flex w-[50%] flex-col items-center justify-center">
                    <div className="text-lg font-bold text-white">430</div>
                    <div className="text-xs text-white">
                      Filter Tickets Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex h-full w-full flex-col justify-between bg-white shadow-xl"></section>
        </div>
      </div>
    </>
  )
}
