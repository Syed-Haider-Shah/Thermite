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
import { supabase } from '@/services/supabase'
import { INITIAL_PARENT_DETAILS, IParentDetails } from '@/types/supabaseTables'

import AssignEmployee from '../AssignEmployee'
import UnAssignedEmployee from '../UnAssignEmployee'

const DETAILS_FIELD = [
  {
    name: 'Name',
    field: 'address'
  },
  {
    name: 'ID',
    field: 'id'
  },
  {
    name: 'Number of Panels',
    field: 'number_of_panels'
  },
  {
    name: 'Warranty',
    field: 'warranty'
  },
  {
    name: 'Serial Number',
    field: 'serial_number'
  },
  {
    name: 'Co-ordinates',
    field: 'coordinates'
  },
  {
    name: 'Country',
    field: 'country'
  },

  {
    name: 'Region',
    field: 'region'
  }
]

const STATUS_OPTIONS = ['OPEN', 'PARTS', 'BUSINESS-DECISION', 'WATER-SAMPLE']

const TicketDetails = () => {
  const [details, setDetails] = useState<IParentDetails>(INITIAL_PARENT_DETAILS)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(STATUS_OPTIONS[0])
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
    } else {
      console.log('value of confirmation: ', confirmation)
      setIsLoading(true)
      const { error } = await supabase.rpc('parent_status_change', {
        stat: status,
        t_id: Number(pid)
      })
      setIsLoading(false)
      if (error) toast.error(error.message)
      else {
        toast.success('Status Updated')
        nav.push('/tickets')
      }
    }
  }

  const statusClose = async () => {
    setIsLoading(true)
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
        <div className="grid grid-cols-2 gap-6">
          {DETAILS_FIELD.map(({ name, field }) =>
            isLoading ? (
              <LineSkeleton key={name} />
            ) : (
              <LineItem
                className="first:col-span-2"
                key={name}
                title={name}
                item={details[field]}
              />
            )
          )}
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
                item={new Date(
                  `${details['installation_date']}`
                ).toDateString()}
              />
              <LineItem
                title="Created At"
                item={new Date(`${details['created_at']}`).toDateString()}
              />
              <LineItem
                title="Employee"
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
              <div className="col-span-2 grid w-full grid-cols-2 items-center gap-2">
                <DropDown2
                  options={STATUS_OPTIONS}
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
            </>
          )}
        </div>
      </Card>
    </div>
  )
}

export default TicketDetails
