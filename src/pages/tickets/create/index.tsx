import { useRouter, useSearchParams } from 'next/navigation'

import { FormEvent, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, PageNav, SearchBar, Table } from '@/components'
import { LOCATION_TICKET_COLS, Paths } from '@/constants'
import { Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { ICustomer, IRow } from '@/types/supabaseTables'

const CreateParentTicket = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [selectedRow, setSelectedRow] = useState<ICustomer>()
  const [search, setSearch] = useState<string>('')
  const [pageCount, setPageCount] = useState<number>(1)

  const handleClose = useCallback(() => {
    router.push(Paths.TICKET)
  }, [router])

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const page = useSearchParams().get('page') || '1'

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true)
    const pageNum = Number(page)
    const query = supabase.from('Customers').select('*', { count: 'exact' })

    if (search) query.ilike('address', `%${search}%`)

    const {
      data: rows,
      error,
      count
    } = await query.range((pageNum - 1) * 15, pageNum * 15)
    setIsLoading(false)

    setPageCount(count || 0)
    if (error) toast.error(error.message)
    else if (rows) setCustomers(rows as ICustomer[])
  }, [page, search])

  const handleRowSelect = useCallback((val: IRow) => {
    setSelectedRow(val as ICustomer)
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!selectedRow) return

      setIsLoading(true)
      const { error } = await supabase.rpc('create_parent_ticket', {
        cus_id: Number(selectedRow.id)
      })
      setIsLoading(false)

      if (error) toast.error(error.message)
      else handleClose()
    },
    [handleClose, selectedRow]
  )

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

  return (
    <Modal showModal title="Create Parent Ticket" onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className="flex h-full flex-col gap-5 overflow-hidden rounded-2xl bg-white p-4"
      >
        <div className="flex justify-between">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for Customers"
          />
          <div className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-loadBlue/80 to-darkIndigo  px-4 py-2 text-sm font-bold text-white shadow-lg">
            <h2 className="font-normal">RESULTS</h2>
            <p className="">{pageCount}</p>
          </div>
        </div>
        <Table
          cols={LOCATION_TICKET_COLS}
          rows={customers}
          selectedRow={selectedRow?.id.toString()}
          isLoading={isLoading}
          onRowSelect={handleRowSelect}
        />
        {selectedRow && (
          <div className="flex w-full flex-row-reverse justify-between">
            <Button isLoading={isLoading} active type="submit">
              Create
            </Button>
          </div>
        )}
      </form>
      <div className="flex justify-center text-black/60">
        <PageNav pageCount={pageCount} />
      </div>
    </Modal>
  )
}

export default CreateParentTicket
