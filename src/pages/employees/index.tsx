import Head from 'next/head'

import { EmployeeDetails, EmployeeGroup, PageHeader } from '@/components'

const Employees = () => {
  return (
    <>
      <Head>
        <title>Employees | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader title="Employees" />
      <article className="w-full py-10 flex bg-lightYellow h-full">
        <section
          id="Employees"
          className="overflow-y-scroll scrollbar-custom w-full max-w-2xl"
        >
          <EmployeeGroup />
          <EmployeeGroup />
          <EmployeeGroup />
        </section>
        <EmployeeDetails />
      </article>
    </>
  )
}

export default Employees
