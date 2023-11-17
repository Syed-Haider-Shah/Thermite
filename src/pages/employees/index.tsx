import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Button,
  DropDown,
  PageNav,
  SearchBar,
  Table,
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'name',
    name: 'Name'
  },
  {
    field: 'email',
    name: 'Email'
  },
  {
    field: 'region',
    name: 'Region'
  },
  {
    field: 'created_at',
    name: 'Created At'
  },
  {
    field: 'country',
    name: 'Country'
  }
]

const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'active', name: 'Active' },
  { value: 'completed', name: 'Completed' }
]

const Employees = () => {
  const pathname = usePathname()

  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-white p-4">
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Employees" />
        <div className="flex gap-x-2">
          <DropDown options={OPTIONS} name="category" />
          <Link href={`${pathname}${Paths.CREATE}`}>
            <Button className="group rounded-lg border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Employee
            </Button>
          </Link>
        </div>
      </div>
      <Table cols={cols} rows={[]} />
      <PageNav pageCount={5} />
    </article>
  )
}

export default Employees
