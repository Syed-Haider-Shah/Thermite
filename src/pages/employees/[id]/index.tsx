import { useParams, useRouter } from 'next/navigation'

import { useCallback, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

import { Card, FilterSelect, SearchBar, Table } from '@/components'
import { Paths } from '@/constants'
import { ProfileDetails } from '@/containers'
import { supabase } from '@/services/supabase'
import {
  IEmployee,
  INITIAL_EMPLOYEE_DATA,
  IParentTicket,
  IRow
} from '@/types/supabaseTables'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'serial_number',
    name: 'Serial Number'
  },
  {
    field: 'address',
    name: 'Address'
  },
  {
    field: 'region',
    name: 'Region'
  },
  {
    field: 'coordinates',
    name: 'Coordinates'
  },
  {
    field: 'installation_date',
    name: 'Installation Date'
  },
  {
    field: 'number_of_panels',
    name: 'Number of Panels'
  }
]

const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'active', name: 'Active' },
  { value: 'completed', name: 'Completed' }
]

const Profile = () => {
  const [rows, setRows] = useState<IParentTicket[]>([])
  const [employee, setEmployee] = useState<IEmployee>(INITIAL_EMPLOYEE_DATA)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const { id } = useParams()

  const employeeCols = useMemo(() => cols, [])

  const fetchEmployee = useCallback(async () => {
    if (!id) return

    const { data, error } = await supabase
      .from('employees')
      .select()
      .eq('name', id)

    if (data && data.length > 0) setEmployee(data[0])
    else if (error) toast.error(error.message)
  }, [id])

  const fetchTickets = useCallback(async () => {
    if (!id) return

    setIsLoading(true)
    const { data, error } = await supabase
      .rpc('get_parent_tickets')
      .eq('employee', id)
    setIsLoading(false)

    if (data) setRows(data)
    else if (error) toast.error(error.message)
  }, [id])

  const handleSelectRow = useCallback(
    (row: IRow) => {
      router.push(`${Paths.TICKET}/${row.id}`)
    },
    [router]
  )

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  useEffect(() => {
    fetchEmployee()
  }, [fetchEmployee])

  return (
    <>
      <ProfileDetails user={employee} hideEdit />
      <Card>
        <div className="flex justify-between">
          <SearchBar placeholder="Search for Tickets" />
          <div className="flex gap-x-2">
            <FilterSelect options={OPTIONS} name="category" />
          </div>
        </div>
        <Table
          onRowSelect={handleSelectRow}
          isLoading={isLoading}
          cols={employeeCols}
          rows={rows}
        />
      </Card>
    </>
  )
}

export default Profile
