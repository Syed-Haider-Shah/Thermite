import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  FilterSelect,
  PageNav,
  SearchBar,
  Table,
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { IEmployee } from '@/types/supabaseTables'

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
    field: 'role',
    name: 'Role'
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
  const [rows, setRows] = useState<IEmployee[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const pathname = usePathname()

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true)
    const { data, error } = await supabase.from('Employees').select()
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (data) setRows(rows as IEmployee[])
  }, [rows])

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-white p-4">
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Employees" />
        <div className="flex gap-x-2">
          <FilterSelect options={OPTIONS} name="category" />
          <Link href={`${pathname}${Paths.CREATE}`}>
            <Button className="group rounded-lg border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Employee
            </Button>
          </Link>
        </div>
      </div>
      <Table cols={cols} rows={rows} isLoading={isLoading} />
      <PageNav pageCount={5} />
    </article>
  )
}

export default Employees
