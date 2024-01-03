import { useRouter } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Card, FilterSelect, SearchBar, Table } from '@/components'
import { Paths } from '@/constants'
import { ProfileDetails, ProfileEdit } from '@/containers'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/services/supabase'
import { IParentTicket, IRow } from '@/types/supabaseTables'

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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const { user } = useAuth()

  const router = useRouter()

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const fetchTickets = useCallback(async () => {
    if (!user.name) return

    setIsLoading(true)

    const query = supabase.rpc('get_parent_tickets').eq('employee', user.name)

    if (search) query.ilike('address', `%${search}%`)

    const { data, error } = await query
    setIsLoading(false)

    if (data) setRows(data)
    else if (error) toast.error(error.message)
  }, [search, user.name])

  const handleSelectRow = useCallback(
    (row: IRow) => {
      router.push(`${Paths.TICKET}/${row.id}`)
    },
    [router]
  )

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  return (
    <div className="flex flex-row-reverse gap-6">
      <ProfileDetails user={user} />
      <ProfileEdit />
      <Card className="w-full">
        <div className="flex justify-between">
          <SearchBar onSearch={handleSearch} placeholder="Search for Tickets" />
          <div className="flex gap-x-2">
            <FilterSelect options={OPTIONS} name="category" />
          </div>
        </div>
        <Table
          onRowSelect={handleSelectRow}
          isLoading={isLoading}
          cols={cols}
          rows={rows}
        />
      </Card>
    </div>
  )
}

export default Profile
