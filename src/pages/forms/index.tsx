import Head from 'next/head'

import { SearchField } from '@/components'

const Forms = () => {
  return (
    <>
      <Head>
        <title>Forms | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="p-10 w-full bg-lightYellow h-full flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Water test Submission</h1>
        <form id="water-testing" className="w-full gap-10 flex flex-wrap ">
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
          <SearchField
            id="region"
            title="Please Select Your Region"
            required
            className="w-80"
          />
        </form>
      </section>
    </>
  )
}

export default Forms
