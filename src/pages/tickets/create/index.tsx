import { useRouter } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'

import { Button, SearchBar, Table } from '@/components'
import { Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { ICustomer } from '@/types/supabaseTables'

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

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true)
    const { data: rows, error } = await supabase
      .from('Customers')
      .select()
      .limit(15)
    setIsLoading(false)
    if (error) {
      console.log(error.message)
      return
    }

    if (rows) {
      setCustomers(rows as ICustomer[])
    }
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

  return (
    <Modal showModal title="Create Parent Ticket" onClose={router.back}>
      <form className="relative space-y-5 overflow-hidden rounded-xl pb-14 pt-5">
        <SearchBar placeholder="Search for Customers" />
        <Table cols={cols} rows={customers} isLoading={isLoading} />
        <Button active className="absolute right-0">
          Create
        </Button>
      </form>
    </Modal>
  )
}

export default CreateParentTicket
