import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useCallback, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  FilterSelect,
  PageNav,
  SearchBar,
  Table,
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { IEmployee, IRow } from '@/types/supabaseTables'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'name',
    name: 'Name'
  },
  { field: 'number_of_assigned_tickets', name: 'Assigned Tickets' },
  { field: 'number_of_closed_tickets', name: 'Closed Tickets' },
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
  const router = useRouter()

  const handleSelectRow = useCallback(
    (row: IRow) => {
      router.push(`${Paths.EMPLOYEE}/${row.name}`)
    },
    [router]
  )

  const employeeCols = useMemo(() => cols, [])

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true)
    const { data: rows, error } = await supabase.from('employees').select()
    setIsLoading(false)

    if (rows) setRows(rows as IEmployee[])
    else if (error) toast.error(error.message)
  }, [])

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  return (
    <Card>
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
      <Table
        cols={employeeCols}
        rows={rows}
        isLoading={isLoading}
        onRowSelect={handleSelectRow}
      />
      <PageNav pageCount={5} />
    </Card>
  )
}

export default Employees
