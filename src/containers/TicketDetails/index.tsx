import { useParams } from 'next/navigation'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, Card } from '@/components'
import { Spinner } from '@/components'
import { supabase } from '@/services/supabase'
import { INITIAL_PARENT_DETAILS, IParentDetails } from '@/types/supabaseTables'

import AssignEmployee from '../AssignEmployee'

const DETAILS_FIELD = [
  {
    name: 'ID',
    field: 'id'
  },
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
  },
  {
    name: 'Child Count',
    field: 'child_count'
  },
  {
    name: 'Created Date',
    field: 'created_at'
  },
  {
    name: 'Installation Date',
    field: 'installation_date'
  },
  {
    name: 'Number of Panels',
    field: 'number_of_panels'
  },
  {
    name: 'Serial Number',
    field: 'serial_number'
  },
  {
    name: 'Status',
    field: 'Status'
  },
  {
    name: 'Warranty',
    field: 'warranty'
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
    <Card title="details" id="details">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-semibold leading-6">Details</h1>
        <Button active>Edit</Button>
      </div>
      {isLoading ? (
        <div className="relative left-1/2 pb-10">
          <Spinner />
        </div>
      ) : (
        <div className="flex max-w-lg flex-wrap justify-between gap-8">
          {DETAILS_FIELD.map(({ name, field }) => (
            <div title={name} key={field}>
              <h2 className="text-sm font-semibold leading-4">{name}</h2>
              <p className="mt-2 line-clamp-2 max-w-sm font-normal text-black/80">
                {`${details[field]}`}
              </p>
            </div>
          ))}
          <div title="Employee">
            <h2 className="text-sm font-semibold leading-4">
              Employee Assigned
            </h2>
            <p className="mt-2 line-clamp-2 max-w-sm font-normal text-black/80">
              {details['employee'] || (
                <AssignEmployee fetchDetails={fetchDetails} />
              )}
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

export default TicketDetails
