import { useParams } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, Card, DropDown, LineItem, LineSkeleton } from '@/components'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
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

const STATUS_OPTIONS = [
  {
    name: 'Open',
    value: 'OPEN'
  }
]

const TicketDetails = () => {
  const [details, setDetails] = useState<IParentDetails>(INITIAL_PARENT_DETAILS)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<IOption>(STATUS_OPTIONS[0])

  const { pid } = useParams() || { pid: '' }

  const fetchDetails = useCallback(async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .rpc('show_parent_details', {
        parent_id: Number(pid)
      })
      .single()
    setIsLoading(false)

    if (error) toast.error(error.message)
    else if (data) setDetails(data)
  }, [pid])

  useEffect(() => {
    fetchDetails()
  }, [fetchDetails])

  return (
    <div className="flex w-110 flex-col gap-8">
      <Card title="details" id="details" className="w-full">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold leading-6">
            Parent Ticket Details
          </h1>
          <Button active>Edit</Button>
        </div>

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
          <LineItem
            title="Installation Date"
            item={new Date(`${details['installation_date']}`).toDateString()}
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
            <DropDown
              options={STATUS_OPTIONS}
              setValue={setStatus}
              value={status}
              title="Status"
              className="w-full"
            />
            <Button
              disabled={status.value === details.status}
              active
              className="py-2.25"
            >
              Update
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default TicketDetails
