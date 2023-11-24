import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, DropDown, PageNav, Table, UnionIcon } from '@/components'
import { Paths } from '@/constants'
import { TicketDetails } from '@/containers'
import { supabase } from '@/services/supabase'
import { IChildTicket } from '@/types/supabaseTables'

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

  const { id } = useParams() || { id: '' }
  const pathname = usePathname()

  const fetchChildTickets = useCallback(async () => {
    if (!id) return

    setIsLoading(true)
    const { data, error } = await supabase
      .from('Child')
      .select()
      .eq('parent_id', id)
      .order('created_at', {
        ascending: false
      })
      .limit(10)

    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (data) setRows(data)
  }, [id])

  useEffect(() => {
    fetchChildTickets()
  }, [fetchChildTickets])

  return (
    <>
      <TicketDetails />
      <article className="flex h-full flex-col gap-5 rounded-2xl bg-white p-4">
        <div className="flex flex-row-reverse gap-2">
          <Link href={`${pathname}${Paths.CREATE}`}>
            <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
              <UnionIcon />
              New Child Ticket
            </Button>
          </Link>
          <DropDown options={OPTIONS} name="category" />
        </div>
        <Table isLoading={isLoading} cols={cols} rows={rows} />
        <PageNav pageCount={5} />
      </article>
    </>
  )
}
export default Tickets
