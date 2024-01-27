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
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'
import { TicketDetails } from '@/containers'
import { supabase } from '@/services/supabase'
import { IRow } from '@/types/supabaseTables'

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
  }
]

const STATUS_OPTIONS = [
  { name: 'All', value: '' },
  {
    name: 'Open',
    value: 'OPEN'
  },
  {
    name: 'Closed',
    value: 'CLOSED'
  },
  {
    name: 'Waiting for Parts',
    value: 'PARTS'
  },
  {
    name: 'Decision',
    value: 'DECISION'
  }
]

const Tickets = () => {
  const [rows, setRows] = useState<IRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)

  const { pid } = useParams() || { pid: '' }
  const pathname = usePathname()
  const router = useRouter()
  const searchParam = useSearchParams()

  const page = searchParam.get('page') || '1'
  const status = searchParam.get('status') || ''

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
    const query = supabase
      .from('Child')
      .select('*', { count: 'exact' })
      .eq('parent_id', pid)

    if (status) query.eq('status', status)

    const { data, error, count } = await query
      .order('created_at', {
        ascending: false
      })
      .range((pageNum - 1) * 15, pageNum * 15)

    setIsLoading(false)

    setTotalCount(count || 0)

    if (error) toast.error(error.message)
    else if (data) setRows(data)
  }, [page, pid, status])

  useEffect(() => {
    fetchChildTickets()
  }, [fetchChildTickets])

  return (
    <div className="flex flex-col">
      <div className="flex gap-7">
        <Card className="w-full">
          <div className="flex flex-row-reverse gap-2">
            <Link href={`${pathname}${Paths.CREATE}`}>
              <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
                <UnionIcon />
                New Child Ticket
              </Button>
            </Link>
            <FilterSelect options={STATUS_OPTIONS} name="status" />
          </div>
          <Table
            onRowSelect={handleRowSelect}
            isLoading={isLoading}
            cols={cols}
            rows={rows}
          />
          <div className="flex justify-center text-black/60">
            <PageNav pageCount={totalCount} />
          </div>
          <div className="absolute bottom-5 right-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-loadBlue/80 to-darkIndigo  px-4 py-2 text-sm font-bold text-white shadow-lg">
            <h2 className="font-normal">RESULTS</h2>
            <p className="">{totalCount}</p>
          </div>
        </Card>
        <TicketDetails />
      </div>
      <div className="mb-0 md:mb-28"></div>
    </div>
  )
}
export default Tickets
