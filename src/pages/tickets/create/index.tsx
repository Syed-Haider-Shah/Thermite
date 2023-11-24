import { useRouter } from 'next/navigation'

import { FormEvent, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, SearchBar, Table } from '@/components'
import { Paths } from '@/constants'
import { Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { ICustomer, IRow } from '@/types/supabaseTables'

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
    field: 'region',
    name: 'Region'
  }
]

const CreateParentTicket = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [selectedRow, setSelectedRow] = useState<ICustomer | null>(null)

  const handleClose = useCallback(() => {
    router.push(Paths.TICKET)
  }, [router])

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true)
    const { data: rows, error } = await supabase
      .from('Customers')
      .select()
      .limit(15)
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (rows) setCustomers(rows as ICustomer[])
  }, [])

  const handleRowSelect = useCallback((val: IRow) => {
    setSelectedRow(val as ICustomer)
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (selectedRow === null) return

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
        <SearchBar placeholder="Search for Customers" />
        <Table
          cols={cols}
          rows={selectedRow ? [selectedRow] : customers}
          isLoading={isLoading}
          onRowSelect={handleRowSelect}
        />
        {selectedRow && (
          <div className="flex w-full justify-between">
            <Button
              onClick={() => setSelectedRow(null)}
              active
              className="bg-black/20 text-black"
            >
              Back
            </Button>
            <Button isLoading={isLoading} active type="submit">
              Create
            </Button>
          </div>
        )}
      </form>
    </Modal>
  )
}

export default CreateParentTicket
