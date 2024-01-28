import { useParams, useRouter } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Gear } from '@/components'
import { ChildDetails, CloseChild, Modal } from '@/containers'
import { supabase } from '@/services/supabase'
import { IChildTicket, INITIAL_CHILD_DATA } from '@/types/supabaseTables'

const ChildTicket = () => {
  const [childTicket, setChildTicket] =
    useState<IChildTicket>(INITIAL_CHILD_DATA)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const { cid } = useParams() || { cid: '' }

  const fetchChildTicket = useCallback(async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .rpc('show_child_details', {
        child_id: Number(cid)
      })
      .single()

    console.log(data)

    setIsLoading(false)

    if (data) setChildTicket(data)
    else if (error) toast.error(error.message)
  }, [cid])

  useEffect(() => {
    fetchChildTicket()
  }, [fetchChildTicket])

  return (
    <Modal showModal onClose={router.back} title="Child Ticket Details">
      {isLoading ? (
        <div className="absolute left-1/2 top-1/2">
          <Gear className="animate-spin" />
        </div>
      ) : (
        <>
          <ChildDetails child={childTicket} />
          {childTicket.status === 'OPEN' && <CloseChild />}
        </>
      )}
    </Modal>
  )
}

export default ChildTicket
