import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

import { useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  Card,
  DropDown2,
  LineItem,
  LineSkeleton,
  StatusModal
} from '@/components'
import { PARENT_TICKET_COLS, TICKET_STATUS_OPTIONS } from '@/constants'
import { supabase } from '@/services/supabase'
import { INITIAL_PARENT_DETAILS, IParentDetails } from '@/types/supabaseTables'

import AssignEmployee from '../AssignEmployee'
import UnAssignedEmployee from '../UnAssignEmployee'

const TicketDetails = () => {
  const [details, setDetails] = useState<IParentDetails>(INITIAL_PARENT_DETAILS)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(
    TICKET_STATUS_OPTIONS.map((val) => val.value)[0]
  )
  const [confirmation, setConfirmation] = useState<boolean>(false)
  const nav = useRouter()

  const dialogRef = useRef<HTMLDialogElement>(null)

  function toggleDialog() {
    if (!dialogRef.current) {
      return
    }
    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  const { pid } = useParams() || { pid: '' }

  const statusUpdate = async () => {
    if (status == 'WATER-SAMPLE' && confirmation == false) {
      toggleDialog()
      return
    }

    if (!pid) {
      toast.error('Parent ID not specified')
      return
    }

    setIsLoading(true)
    const { error } = await supabase.rpc('parent_status_change', {
      stat: status,
      t_id: Number(pid)
    })
    setIsLoading(false)
    if (error) toast.error(error.message)
    else {
      setConfirmation(false)
      toast.success('Status Updated')
      nav.push('/tickets')
    }
  }

  const statusClose = async () => {
    setIsLoading(true)
    if (!pid) {
      toast.error('Parent ID not specified')
      return
    }

    const { error } = await supabase.rpc('close_parent_ticket_water_sample', {
      par_id: Number(pid)
    })
    setIsLoading(false)
    if (error) toast.error(error.message)
    else {
      toast.success('Status Updated : Please Sumbit a water Sample')
      nav.push('/tickets')
    }
  }

  const fetchDetails = useCallback(async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .rpc('get_parent_tickets')
      .eq('id', Number(pid))
      .single()
    setIsLoading(false)

    if (error) toast.error(error.message)
    else {
      setDetails(data)
    }
  }, [pid])
  const fetchStatus = useCallback(async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .from('Parent')
      .select('status')
      .eq('id', Number(pid))
      .single()
    setIsLoading(false)

    if (error) toast.error(error.message)
    else {
      setStatus(data.status)
    }
  }, [pid])

  useEffect(() => {
    fetchDetails()
  }, [fetchDetails])

  useEffect(() => {
    fetchStatus()
  }, [fetchStatus])

  return (
    <div className="flex w-full min-w-95 max-w-screen-xs flex-col gap-8">
      <StatusModal
        toggleDialog={toggleDialog}
        statusClose={statusClose}
        ref={dialogRef}
      />
      <Card title="details" id="details" className="w-full">
        <h1 className="text-xl font-semibold leading-6">
          Parent Ticket Details
        </h1>
        <div className="mt-4 grid grid-cols-2 gap-8">
          {PARENT_TICKET_COLS.map(({ name, field }) => {
            if (name === 'ID' || name === 'Assigned Employee') return
            if (isLoading) return <LineSkeleton key={name} />
            return (
              <LineItem
                className={name === 'Address' ? 'col-span-2' : ''}
                isDate={field === 'created_at'}
                key={name}
                title={name}
                item={details[field]}
              />
            )
          })}
          {isLoading ? (
            <>
              <LineSkeleton />
              <LineSkeleton />
              <LineSkeleton />
              <LineSkeleton />
            </>
          ) : (
            <>
              <LineItem
                title="Installation Date"
                item={details['installation_date']}
                isDate
              />
              <LineItem
                title="Employee"
                className="border-b-0"
                item={
                  details['employee'] ? (
                    <UnAssignedEmployee
                      name={details['employee']}
                      fetchDetails={fetchDetails}
                    />
                  ) : (
                    <AssignEmployee fetchDetails={fetchDetails} />
                  )
                }
              />
              {details.status !== 'WATER-SAMPLE' && (
                <div className="col-span-2 grid w-full grid-cols-2 items-center gap-2">
                  <DropDown2
                    options={TICKET_STATUS_OPTIONS.map((val) => val.value)}
                    setValue={setStatus}
                    value={status}
                    title="Status"
                    className="w-full"
                  />
                  <Button
                    disabled={status === details.status}
                    className="py-2.25"
                    active
                    onClick={statusUpdate}
                  >
                    Update
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Card>
    </div>
  )
}

export default TicketDetails
