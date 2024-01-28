import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

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
import { LOCATION_DETAILS_COLS } from '@/constants'
import { supabase } from '@/services/supabase'
import { ICustomer } from '@/types/supabaseTables'

const Customers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [totalCount, setTotalCount] = useState<number>(0)

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const page = useSearchParams().get('page') || '1'

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true)

    const query = supabase.from('Customers').select('*', { count: 'exact' })

    if (search) query.ilike('address', `%${search}%`)

    const pageNum = Number(page)

    const {
      data: rows,
      error,
      count
    } = await query.range((pageNum - 1) * 15, pageNum * 15)
    setIsLoading(false)

    setTotalCount(count || 0)

    if (error) toast.error(error.message)
    else if (rows) setCustomers(rows as ICustomer[])
  }, [page, search])

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src="/logoSymbol.svg" alt="logo Icon" width={40} height={40} />
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for Customers"
          />
        </div>
        <div className="flex gap-x-2">
          <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
            <UnionIcon />
            New Customer
          </Button>
        </div>
      </div>
      <Table
        cols={LOCATION_DETAILS_COLS}
        rows={customers}
        isLoading={isLoading}
      />
      <div className="flex justify-center text-black/60">
        <PageNav pageCount={totalCount} />
      </div>
      <div className="absolute bottom-5 right-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-loadBlue/80 to-darkIndigo  px-4 py-2 text-sm font-bold text-white shadow-lg">
        <h2 className="font-normal">RESULTS</h2>
        <p className="">{totalCount}</p>
      </div>
    </Card>
  )
}

export default Customers
