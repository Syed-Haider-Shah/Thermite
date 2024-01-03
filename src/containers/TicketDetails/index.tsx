import { useParams } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, Card, LineItem, LineSkeleton } from '@/components'
import { supabase } from '@/services/supabase'
import { INITIAL_PARENT_DETAILS, IParentDetails } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import AssignEmployee from '../AssignEmployee'
import UnAssignedEmployee from '../UnAssignEmployee'

const DETAILS_FIELD = [
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
  }
]

const LOCATION_DETAILS = [
  {
    name: 'Co-ordinates',
    field: 'coordinates'
  },
  {
    name: 'Location',
    field: 'address'
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

const TicketDetails = () => {
  const [details, setDetails] = useState<IParentDetails>(INITIAL_PARENT_DETAILS)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    <div className="flex gap-8">
      <Card title="details" id="details" className="w-full">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold leading-6">Customer Details</h1>
          <Button active>Edit</Button>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-wrap gap-x-12 gap-y-8 rounded-5 bg-lightGray p-4 [&>div]:min-w-55">
            {LOCATION_DETAILS.map(({ name, field }) =>
              isLoading ? (
                <LineSkeleton key={name} />
              ) : (
                <LineItem key={name} title={name} item={details[field]} />
              )
            )}
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-8 rounded-5 bg-lightGray p-4">
            {DETAILS_FIELD.map(({ name, field }) =>
              isLoading ? (
                <LineSkeleton key={name} />
              ) : (
                <LineItem key={name} title={name} item={details[field]} />
              )
            )}
            <LineItem
              title="Installation Date"
              item={new Date(`${details['installation_date']}`).toDateString()}
            />
          </div>
        </div>
      </Card>
      <Card className="w-80">
        <h1 className="text-xl font-semibold leading-6">Ticket Details</h1>
        {isLoading ? (
          <div className="">
            <LineSkeleton />
            <LineSkeleton />
            <LineSkeleton />
            <LineSkeleton />
          </div>
        ) : (
          <div className="flex flex-wrap justify-between gap-x-12 gap-y-4">
            <div className="w-full">
              <div className="mb-2 text-sm font-semibold">Progress</div>
              <div className="mb-0.5 w-full rounded-full ring-4">
                <div
                  className={cn(
                    'rounded-full border-2 border-indigo',
                    `w-[33%]`
                  )}
                />
              </div>
              <div className="flex justify-between">
                <div>0</div>
                <div>{details.child_count}</div>
              </div>
            </div>
            <LineItem title="Status" item={details.status} />
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
            <LineItem
              title="Created At"
              item={new Date(`${details['created_at']}`).toDateString()}
            />
          </div>
        )}
      </Card>
    </div>
  )
}

export default TicketDetails
