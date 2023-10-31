import Head from 'next/head'
import Link from 'next/link'

import { PageHeader } from '@/components'
import { Paths } from '@/constants'

const Guides = () => {
  return (
    <>
      <Head>
        <title>Guides | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader title="All Guides" />
      <section className="p-9 gap-10 flex flex-col w-full">
        <h1 className="text-xl font-medium tracking-wider leading-3">
          Select Category
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-10 text-xl font-bold text-indigo">
          <li>
            <Link
              href={`${Paths.GUIDE}/F`}
              className="w-120 h-60 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Generation F
            </Link>
          </li>
          <li>
            <Link
              href={`${Paths.GUIDE}/H`}
              className="w-120 h-60 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Generation H
            </Link>
          </li>
          <li>
            <Link
              href={`${Paths.GUIDE}/G`}
              className="w-120 h-60 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Generation G
            </Link>
          </li>
          <li>
            <Link
              href={`${Paths.GUIDE}/parts`}
              className="w-120 h-60 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Show Visual Parts
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Guides
