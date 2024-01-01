import { useParams } from 'next/navigation'

import { memo, useCallback, useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components'
import { supabase } from '@/services/supabase'

import Modal from '../Modal'

const UnAssignedEmployee = ({
  name,
  fetchDetails
}: {
  name: string
  fetchDetails: () => void
}) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { pid } = useParams() || { pid: '' }

  const handleBlur = () => {
    setShowModal(false)
  }

  const handleUnAssignEmployee = useCallback(async () => {
    if (!pid) return

    setIsLoading(true)
    const { error } = await supabase.rpc('unassign_employee', {
      par_id: Number(pid)
    })
    setIsLoading(false)
    setShowModal(false)
    fetchDetails()
    if (error) toast.error(error.message)
  }, [fetchDetails, pid])

  return (
    <>
      <Button
        onClick={() => setShowModal((val) => !val)}
        className="rounded-sm border p-1"
      >
        {name}
      </Button>
      <Modal
        title="UnAssign Employee"
        className="min-h-0 min-w-0 max-w-sm gap-4 p-4"
        showModal={showModal}
        onClose={handleBlur}
      >
        <>
          <p className="text-sm">
            Are you sure you want to Remove this employee from the selected
            ticket
          </p>
          <Button
            onClick={handleUnAssignEmployee}
            isLoading={isLoading}
            className="!rounded-2.5 bg-red/70 text-white hover:bg-red/50"
          >
            Remove
          </Button>
        </>
      </Modal>
    </>
  )
}

export default memo(UnAssignedEmployee)
