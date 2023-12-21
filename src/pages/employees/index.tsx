import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
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
import { ProfileDetails } from '@/containers'
import { supabase } from '@/services/supabase'
import { IEmployee, IRow } from '@/types/supabaseTables'

const cols = [
  {
    field: 'name',
    name: 'Name'
  },
  {
    field: 'role',
    name: 'Role'
  },
  {
    field: 'country',
    name: 'Team'
  }
]

const ticketCols = [
  {
    name: 'ID',
    field: 'id'
  },
  {
    name: 'Location',
    field: 'address'
  },
  {
    name: 'Status',
    field: 'status'
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
  const [selectedEmp, setSelectedEmp] = useState<IEmployee | null>(null)
  const [tickets, setTickets] = useState<IRow[]>([])
  const [isLoadingTickets, setIsLoadingTickets] = useState<boolean>(false)

  const pathname = usePathname()

  const handleSelectRow = useCallback((row: IRow) => {
    setSelectedEmp(row as IEmployee)
  }, [])

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true)
    const { data: rows, error } = await supabase.from('employees').select()
    setIsLoading(false)

    if (rows) setRows(rows as IEmployee[])
    else if (error) toast.error(error.message)
  }, [])

  const fetchTickets = useCallback(async () => {
    if (!selectedEmp?.name) return

    setIsLoadingTickets(true)
    const { data, error } = await supabase
      .rpc('get_parent_tickets')
      .eq('employee', selectedEmp.name)
      .select('id, address, status, employee')
    setIsLoadingTickets(false)

    if (data) setTickets(data)
    else if (error) toast.error(error.message)
  }, [selectedEmp])

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets, selectedEmp])

  return (
    <div className="flex gap-6">
      <Card className="w-1/2">
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
          cols={cols}
          rows={rows}
          isLoading={isLoading}
          onRowSelect={handleSelectRow}
        />
        <PageNav pageCount={5} />
      </Card>
      <div className="flex w-1/2 flex-col gap-6">
        {selectedEmp && (
          <>
            <ProfileDetails user={selectedEmp} hideEdit />
            <Card>
              <Table
                cols={ticketCols}
                rows={tickets}
                isLoading={isLoadingTickets}
                onRowSelect={handleSelectRow}
              />
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

export default Employees
