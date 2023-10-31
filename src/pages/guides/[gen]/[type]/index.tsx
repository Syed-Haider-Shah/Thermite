import Head from 'next/head'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import { Download, PageHeader } from '@/components'

const Guide = () => {
  const { gen, type } = useParams() as { gen: string; type: string }

  return (
    <>
      <Head>
        <title>Guides | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader title="All Guides" />
      <section className="p-7 w-full space-y-7 text-xl font-bold leading-3">
        <h1>
          Generation {gen} &gt; {type}
        </h1>
        <Image
          src="/guideVideo.png"
          alt="thumbnail"
          width={720}
          height={360}
          className="aspect-video rounded-xl"
        />
        <h1 className="text-xl font-bold text-indigo leading-3">Documents</h1>
        <ul className="max-w-3xl">
          <li className="p-4 flex justify-between items-center rounded-xl shadow-lg">
            <div className="space-y-3">
              <h1 className="text-xl leading-3 font-medium">
                Filter Installation
              </h1>
              <p className="text-sm text-black/40">
                Its a installation guide to install filter in generation f.
              </p>
              <time
                className="text-sm text-black/40"
                dateTime="2008-02-14 20:00"
              >
                2 weeks ago
              </time>
            </div>
            <button className="bg-black text-white font-semibold py-2.5 px-4 rounded-2xl flex items-center gap-3">
              <Download />
              Download
            </button>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Guide
