import Head from 'next/head'

const Software = () => {
  return (
    <>
      <Head>
        <title>Softwares | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="w-full h-full bg-lightYellow p-6 flex flex-col gap-10">
        <h1 className="text-xl font-bold leading-3">
          Thermite GUI and Fireware
        </h1>
        <ul className="max-w-4xl">
          <li className="w-full shadow-lg bg-white p-4 rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">
                Source GUI Installation Instruction
              </h1>
              <p className="text-black/60">
                Installation Instruction for the source GUI
              </p>
            </div>
            <time className="text-sm text-black/60">NEW 07/29/2023</time>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Software
