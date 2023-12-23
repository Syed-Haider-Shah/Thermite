import { useParams } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, Card, Gear } from '@/components'
import { supabase } from '@/services/supabase'
import { INITIAL_PARENT_DETAILS, IParentDetails } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

import AssignEmployee from '../AssignEmployee'

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
        {isLoading ? (
          <div className="relative left-1/2 pb-10">
            <Gear className="animate-spin" />
          </div>
        ) : (
          <div className="flex gap-6">
            <div className="flex flex-wrap gap-x-12 gap-y-8 rounded-5 bg-lightGray p-4">
              {LOCATION_DETAILS.map(({ name, field }) => (
                <div title={name} key={field} className="min-w-55">
                  <h2 className="text-sm font-semibold leading-4">{name}</h2>
                  <p className="mt-2 line-clamp-2 font-normal text-black/80">
                    {`${details[field]}`}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-8 rounded-5 bg-lightGray p-4">
              {DETAILS_FIELD.map(({ name, field }) => (
                <div title={name} key={field}>
                  <h2 className="text-sm font-semibold leading-4">{name}</h2>
                  <p className="mt-2 line-clamp-2 font-normal text-black/80">
                    {`${details[field]}`}
                  </p>
                </div>
              ))}
              <div>
                <h2 className="text-sm font-semibold leading-4">
                  Installation Date
                </h2>
                <p className="mt-2 line-clamp-2 font-normal text-black/80">
                  {new Date(`${details['installation_date']}`).toDateString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </Card>
      <Card className="w-80">
        <h1 className="text-xl font-semibold leading-6">Ticket Details</h1>
        {isLoading ? (
          <div className="relative left-1/2 pb-10">
            <Gear className="animate-spin" />
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
            <div className="pb-4" title="Status">
              <h2 className="text-sm font-semibold leading-4">Status</h2>
              <p className="mt-2 line-clamp-2 font-normal text-black/80">
                {`${details.status}`}
              </p>
            </div>
            <div title="Employee">
              <h2 className="text-sm font-semibold leading-4">
                Employee Assigned
              </h2>
              <p className="mt-2 line-clamp-2 font-normal text-black/80">
                {details['employee'] || (
                  <AssignEmployee fetchDetails={fetchDetails} />
                )}
              </p>
            </div>
            <div title={'Created At'}>
              <h2 className="text-sm font-semibold leading-4">Created At</h2>
              <p className="mt-2 line-clamp-2 font-normal text-black/80">
                {new Date(`${details['created_at']}`).toDateString()}
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

export default TicketDetails
