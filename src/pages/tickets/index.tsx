import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

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
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { IParentTicket, IRow } from '@/types/supabaseTables'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'employee',
    name: 'Assigned Employee'
  },
  {
    field: 'child_count',
    name: 'Child Ticket Count'
  },
  {
    field: 'created_at',
    name: 'Created At'
  },
  {
    field: 'status',
    name: 'Status'
  },
  {
    field: 'customer_id',
    name: 'Customer ID'
  },
  {
    field: 'close_date',
    name: 'Close Date'
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
      .from('Parent')
      .select()
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
    <article className="flex h-full flex-col gap-5 rounded-2xl bg-white p-4">
      <div className="flex justify-between">
        <SearchBar placeholder="Search for Tickets" />
        <div className="flex gap-x-2">
          <DropDown options={OPTIONS} name="category" />
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
    </article>
  )
}
export default Tickets
