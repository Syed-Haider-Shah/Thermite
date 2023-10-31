import Head from 'next/head'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { PageHeader } from '@/components'
import { Paths } from '@/constants'

const Generation = () => {
  const { gen } = useParams() as { gen: string }

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
        <ul className="flex flex-col justify-center items-center w-full max-w-6xl text-xl font-bold text-indigo gap-10">
          <li className="w-full">
            <Link
              href={`${Paths.GUIDE}/${gen}/installation`}
              className="w-full h-20 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Installation
            </Link>
          </li>
          <li className="w-full">
            <Link
              href={`${Paths.GUIDE}/${gen}/production`}
              className="w-full h-20 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Production
            </Link>
          </li>
          <li className="w-full">
            <Link
              href={`${Paths.GUIDE}/${gen}/dispensing`}
              className="w-full h-20 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Dispensing
            </Link>
          </li>
          <li className="w-full">
            <Link
              href={`${Paths.GUIDE}/${gen}/ozonation`}
              className="w-full h-20 bg-lightSilver flex justify-center items-center shadow-lg"
            >
              Ozonation
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Generation
