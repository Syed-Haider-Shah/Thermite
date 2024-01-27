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
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'
import { ProfileDetails } from '@/containers'
import { supabase } from '@/services/supabase'
import { IEmployee, IRow } from '@/types/supabaseTables'

const cols = [
  {
    field: 'name',
    name: 'Name'
  },
  {
    field: 'role',
    name: 'Role'
  },
  {
    field: 'country',
    name: 'Team'
  }
]

const ticketCols = [
  {
    name: 'ID',
    field: 'id'
  },
  {
    name: 'Location',
    field: 'address'
  },
  {
    name: 'Status',
    field: 'status'
  }
]

const COUNTIES = [
  { name: 'All', value: 'all' },
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'Australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

const Employees = () => {
  const [rows, setRows] = useState<IEmployee[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedEmp, setSelectedEmp] = useState<IEmployee | null>(null)
  const [tickets, setTickets] = useState<IRow[]>([])
  const [isLoadingTickets, setIsLoadingTickets] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [totalCount, setTotalCount] = useState<number>(0)

  const pathname = usePathname()
  const country = useSearchParams().get('country')
  const page = useSearchParams().get('page') || '1'
  const router = useRouter()

  const handleSelectRow = useCallback((row: IRow) => {
    setSelectedEmp(row as IEmployee)
  }, [])

  const handleTicketSelect = useCallback(
    (row: IRow) => {
      router.push(`${Paths.TICKET}/${row.id}`)
    },
    [router]
  )

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true)

    const query = supabase.from('employees').select('*', { count: 'exact' })

    if (country && country !== 'all') query.eq('country', country)

    if (search) query.ilike('name', `%${search}%`)

    const pageNum = Number(page)

    const {
      data: rows,
      error,
      count
    } = await query.range((pageNum - 1) * 15, pageNum * 15)

    setIsLoading(false)

    setTotalCount(count || 0)

    if (rows) setRows(rows as IEmployee[])
    else if (error) toast.error(error.message)
  }, [country, page, search])

  const fetchTickets = useCallback(async () => {
    if (!selectedEmp?.name) return

    setIsLoadingTickets(true)
    const { data, error } = await supabase
      .rpc('get_parent_tickets')
      .eq('employee', selectedEmp.name)
    setIsLoadingTickets(false)

    if (data) setTickets(data)
    else if (error) toast.error(error.message)
  }, [selectedEmp?.name])

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets, selectedEmp])

  return (
    <div className="flex h-full gap-6">
      <Card className="w-1/2">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              src="/logoSymbol.svg"
              alt="logo Icon"
              width={40}
              height={40}
            />
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search for Employees"
            />
          </div>
          <div className="flex gap-x-2">
            <FilterSelect options={COUNTIES} name="country" />
            <Link href={`${pathname}${Paths.CREATE}`}>
              <Button className="group rounded-lg border border-black/5 bg-white px-4 font-medium text-black/60">
                <UnionIcon />
                New Employee
              </Button>
            </Link>
          </div>
        </div>
        <Table
          cols={cols}
          rows={rows}
          selectedRow={selectedEmp?.id}
          isLoading={isLoading}
          onRowSelect={handleSelectRow}
        />
        <div className="flex justify-center text-black/60">
          <PageNav pageCount={totalCount} />
        </div>
        <div className="absolute bottom-4 right-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-loadBlue/80 to-darkIndigo  px-4 py-2 text-sm font-bold text-white shadow-lg">
          <h2 className="font-normal">RESULTS</h2>
          <p className="">{totalCount}</p>
        </div>
      </Card>
      <div className="flex w-1/2 flex-col gap-6">
        {selectedEmp && (
          <>
            <ProfileDetails user={selectedEmp} hideEdit />
            <Card>
              <Table
                cols={ticketCols}
                rows={tickets}
                isLoading={isLoadingTickets}
                onRowSelect={handleTicketSelect}
              />
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

export default Employees
