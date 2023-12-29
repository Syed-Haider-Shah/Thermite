import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  PageNav,
  SearchBar,
  Table,
  UnionIcon
} from '@/components'
import { supabase } from '@/services/supabase'
import { ICustomer } from '@/types/supabaseTables'

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
    name: 'Installation Date',
    isDate: true
  },
  {
    field: 'number_of_panels',
    name: 'Number of Panels'
  }
]

const Customers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true)

    const query = supabase.from('Customers').select()

    if (search) query.textSearch('address', search)

    const { data: rows, error } = await query.limit(15)
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (rows) setCustomers(rows as ICustomer[])
  }, [search])

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

  return (
    <Card>
      <div className="flex justify-between">
        <SearchBar onSearch={handleSearch} placeholder="Search for Customers" />
        <div className="flex gap-x-2">
          <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
            <UnionIcon />
            New Customer
          </Button>
        </div>
      </div>
      <Table cols={cols} rows={customers} isLoading={isLoading} />
      <PageNav pageCount={5} />
    </Card>
  )
}

export default Customers
