import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

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
import { supabase } from '@/services/supabase'
import { IParentTicket, IRow } from '@/types/supabaseTables'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'address',
    name: 'Address'
  },
  {
    field: 'child_count',
    name: 'Child Count'
  },
  {
    field: 'customer_id',
    name: 'Customer ID'
  },
  {
    field: 'created_at',
    name: 'Created At',
    isData: true
  },
  {
    field: 'employee',
    name: 'Assigned Employee'
  },
  {
    field: 'status',
    name: 'Status'
  }
]
const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'active', name: 'Active' },
  { value: 'completed', name: 'Completed' }
]
const Tickets = () => {
  const [tickets, setTickets] = useState<IParentTicket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  const pathname = usePathname()

  const handleRowSelect = useCallback(
    (row: IRow) => {
      router.push(`${Paths.TICKET}/${row.id}`)
    },
    [router]
  )

  const fetchTickets = useCallback(async () => {
    setIsLoading(true)
    const { data: rows, error } = await supabase
      .rpc('get_parent_tickets')
      .order('created_at', {
        ascending: false
      })
      .limit(15)
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (rows) setTickets(rows as IParentTicket[])
  }, [])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  return (
    <Card>
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Tickets" />
        <div className="flex gap-x-2">
          <FilterSelect options={OPTIONS} name="category" />
          <Link href={`${pathname}${Paths.CREATE}`}>
            <Button className="group rounded-lg border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Parent Ticket
            </Button>
          </Link>
        </div>
      </div>
      <Table
        cols={cols}
        rows={tickets}
        isLoading={isLoading}
        onRowSelect={handleRowSelect}
      />
      <PageNav pageCount={5} />
    </Card>
  )
}
export default Tickets
