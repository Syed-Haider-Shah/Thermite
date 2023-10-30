import Head from 'next/head'

import { Filter, FormLine, Magnifier, PageHeader } from '@/components'

const fields = [
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' },
  { title: 'Problems', placeholder: 'problems' }
]

const CreateChild = () => {
  return (
    <>
      <Head>
        <title>Home | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader title="R10987ETYRH">
        <h2>Child Tickets (61)</h2>
        <button type="button">create child ticket</button>
        <Magnifier />
        <Filter />
      </PageHeader>
      <section id="create-child" className="w-full flex flex-col mt-6 px-9">
        <h1 className="text-2xl font-semibold text-black">
          Create Child Ticket
        </h1>
        <form className="grid grid-cols-2 w-full max-w-2xl gap-y-6 gap-x-16">
          {fields.map(({ title, placeholder }) => (
            <FormLine
              key={title}
              id={title}
              title={title}
              className="w-80"
              placeholder={placeholder}
            />
          ))}
        </form>
      </section>
    </>
  )
}

export default CreateChild
