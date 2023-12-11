import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  FilterSelect,
  PageNav,
  Table,
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'
import { TicketDetails } from '@/containers'
import { supabase } from '@/services/supabase'
import { IChildTicket, IRow } from '@/types/supabaseTables'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'description',
    name: 'Description'
  },
  {
    field: 'created_at',
    name: 'Created At'
  },
  {
    field: 'customer_impact',
    name: 'Customer Impact'
  },
  {
    field: 'customer_inquiry',
    name: 'Customer Inquiry'
  },
  {
    field: 'fault',
    name: 'Fault'
  },
  {
    field: 'parent_id',
    name: 'Parent ID'
  },
  {
    field: 'problem',
    name: 'Problem'
  },
  {
    field: 'status',
    name: 'Status'
  },
  {
    field: 'upgrade',
    name: 'Upgrade'
  },
  {
    field: 'serial_number',
    name: 'Serial Number'
  }
]
const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'active', name: 'Active' },
  { value: 'completed', name: 'Completed' }
]
const Tickets = () => {
  const [rows, setRows] = useState<IChildTicket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { pid } = useParams() || { pid: '' }
  const pathname = usePathname()
  const router = useRouter()

  const handleRowSelect = useCallback(
    (row: IRow) => {
      router.push(`${pathname}/${row.id}`)
    },
    [pathname, router]
  )

  const fetchChildTickets = useCallback(async () => {
    if (!pid) return

    setIsLoading(true)
    const { data, error } = await supabase
      .from('Child')
      .select()
      .eq('parent_id', pid)
      .order('created_at', {
        ascending: false
      })
      .limit(10)

    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (data) setRows(data)
  }, [pid])

  useEffect(() => {
    fetchChildTickets()
  }, [fetchChildTickets])

  return (
    <>
      <TicketDetails />
      <Card>
        <div className="flex flex-row-reverse gap-2">
          <Link href={`${pathname}${Paths.CREATE}`}>
            <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Child Ticket
            </Button>
          </Link>
          <FilterSelect options={OPTIONS} name="category" />
        </div>
        <Table
          onRowSelect={handleRowSelect}
          isLoading={isLoading}
          cols={cols}
          rows={rows}
        />
        <PageNav pageCount={5} />
      </Card>
    </>
  )
}
export default Tickets
