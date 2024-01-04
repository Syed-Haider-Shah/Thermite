import Link from 'next/link'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  FilterSelect,
  PageNav,
  Table,
  Toggle,
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
    name: 'Created At',
    isDate: true
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

const STATUS_OPTIONS = [
  {
    name: 'Open',
    value: 'OPEN'
  },
  {
    name: 'Closed',
    value: 'CLOSED'
  }
]

const Tickets = () => {
  const [rows, setRows] = useState<IChildTicket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showClosed, setShowClosed] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)

  const { pid } = useParams() || { pid: '' }
  const pathname = usePathname()
  const router = useRouter()
  const searchParam = useSearchParams()

  const page = searchParam.get('page') || '1'
  const status = searchParam.get('status') || ''

  const handleToggle = useCallback(
    (val: boolean) => {
      router.push(pathname)
      setShowClosed(val)
    },
    [pathname, router]
  )

  const handleRowSelect = useCallback(
    (row: IRow) => {
      router.push(`${pathname}/${row.id}`)
    },
    [pathname, router]
  )

  const fetchChildTickets = useCallback(async () => {
    if (!pid) return

    const pageNum = Number(page)

    setIsLoading(true)
    const query = supabase.from('Child').select().eq('parent_id', pid)

    if (status) query.eq('status', status)
    else if (!showClosed) query.neq('status', 'CLOSED')

    const { data, error, count } = await query
      .order('created_at', {
        ascending: false
      })
      .range((pageNum - 1) * 15, pageNum * 15)

    setIsLoading(false)

    setTotalCount(count ? Math.ceil(count / 15) : 1)

    if (error) toast.error(error.message)
    else if (data) setRows(data)
  }, [page, pid, showClosed, status])

  useEffect(() => {
    fetchChildTickets()
  }, [fetchChildTickets])

  return (
    <div className="flex gap-7">
      <Card>
        <div className="flex flex-row-reverse gap-2">
          <Link href={`${pathname}${Paths.CREATE}`}>
            <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Child Ticket
            </Button>
          </Link>
          <FilterSelect options={STATUS_OPTIONS} name="status" />
          <Toggle onChange={handleToggle} isChecked={showClosed} />
        </div>
        <Table
          onRowSelect={handleRowSelect}
          isLoading={isLoading}
          cols={cols}
          rows={rows}
        />
        <PageNav pageCount={totalCount} />
      </Card>
      <TicketDetails />
    </div>
  )
}
export default Tickets
