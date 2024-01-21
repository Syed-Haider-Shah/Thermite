import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  FilterSelect,
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
    name: 'Water Sample',
    value: 'WATER-SAMPLE'
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
  const [tickets, setTickets] = useState<IParentTicket[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [showClosed, setShowClosed] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)

  const router = useRouter()
  const pathname = usePathname()

  const handleToggle = useCallback(
    (val: boolean) => {
      router.push(pathname)
      setShowClosed(val)
    },
    [pathname, router]
  )

  const handleRowSelect = useCallback(
    (row: IRow) => {
      router.push(`${Paths.TICKET}/${row.id}`)
    },
    [router]
  )

  const searchParam = useSearchParams()

  const page = searchParam.get('page') || '1'
  const status = searchParam.get('status') || ''

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const fetchTickets = useCallback(async () => {
    setIsLoading(true)
    const query = supabase.rpc('get_parent_tickets', {}, { count: 'exact' })

    if (status) query.eq('status', status)
    else if (!showClosed) query.neq('status', 'CLOSED')

    if (search) {
      query.ilike('address', `%${search}%`)
    }

    const pageNum = Number(page)

    const {
      data: rows,
      error,
      count
    } = await query
      .order('created_at', {
        ascending: false
      })
      .range((pageNum - 1) * 15, pageNum * 15)
    setIsLoading(false)

    setTotalCount(count || 0)

    if (error) toast.error(error.message)
    else if (rows) setTickets(rows as IParentTicket[])
  }, [page, search, showClosed, status])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex gap-8">
          <Image src="/logoSymbol.svg" alt="logo Icon" width={40} height={40} />
          <SearchBar onSearch={handleSearch} placeholder="Search for Tickets" />
          <div className=" l flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-loadBlue/80 to-darkIndigo px-4 text-sm font-bold text-white shadow-lg">
            <h2 className="font-normal">RESULTS</h2>
            <p className="">{totalCount}</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <Toggle onChange={handleToggle} isChecked={showClosed} />
          <FilterSelect options={STATUS_OPTIONS} name="status" />
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
      <div className="flex justify-center text-black/60">
        <PageNav pageCount={totalCount} />
      </div>
    </Card>
  )
}
export default Tickets
