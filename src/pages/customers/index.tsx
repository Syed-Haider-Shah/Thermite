import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  DropDown,
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

const Customers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true)
    const { data: rows, error } = await supabase
      .from('Customers')
      .select()
      .limit(15)
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (rows) setCustomers(rows as ICustomer[])
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl bg-white p-4">
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Customers" />
        <div className="flex gap-x-2">
          <DropDown options={OPTIONS} name="category" />
          <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
            <UnionIcon />
            New Customer
          </Button>
        </div>
      </div>
      <Table cols={cols} rows={customers} isLoading={isLoading} />
      <PageNav pageCount={5} />
    </article>
  )
}

export default Customers
