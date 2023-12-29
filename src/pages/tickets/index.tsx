import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  PageNav,
  SearchBar,
  Table,
  Toggle,
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
    isDate: true
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

const Tickets = () => {
  const [tickets, setTickets] = useState<IParentTicket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [showClosed, setShowClosed] = useState<boolean>(false)

  const router = useRouter()
  const pathname = usePathname()

  const handleRowSelect = useCallback(
    (row: IRow) => {
      router.push(`${Paths.TICKET}/${row.id}`)
    },
    [router]
  )

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const fetchTickets = useCallback(async () => {
    setIsLoading(true)
    const query = supabase.rpc('get_parent_tickets')

    if (showClosed) query.neq('status', 'CLOSED')

    if (search) {
      const newText = search.replaceAll(':', '\\:')
      query.textSearch('address', newText)
    }

    const { data: rows, error } = await query
      .order('created_at', {
        ascending: false
      })
      .limit(15)
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (rows) setTickets(rows as IParentTicket[])
  }, [search, showClosed])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  return (
    <Card>
      <div className="flex justify-between">
        <SearchBar onSearch={handleSearch} placeholder="Search for Tickets" />
        <div className="flex gap-x-2">
          <Toggle onChange={setShowClosed} isChecked={showClosed} />
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
