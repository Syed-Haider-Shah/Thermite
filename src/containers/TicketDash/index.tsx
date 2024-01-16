import Link from 'next/link'

import { useCallback, useEffect, useState } from 'react'

import { RightArrow } from '@/components'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/utils/cn'

const TicketDash = () => {
  const { user } = useAuth()

  const [percentage, setPercentage] = useState(0)
  const [invPercentage, setInvPercentage] = useState(0)

  const calculating = useCallback(() => {
    setPercentage(
      Math.trunc(
        (user.number_of_assigned_tickets /
          (user.number_of_closed_tickets + user.number_of_assigned_tickets)) *
          100
      )
    )
  }, [user.number_of_assigned_tickets, user.number_of_closed_tickets])

  useEffect(() => {
    calculating()
  }, [calculating])

  useEffect(() => {
    setInvPercentage(100 - percentage)
  }, [percentage])

  return (
    <section className="flex h-full w-62 flex-col justify-between bg-white shadow-xl">
      <div className="mt-15 flex flex-col items-center justify-center">
        <div className="mt-2 text-2xl font-bold">
          {user.number_of_assigned_tickets}
        </div>
        <span className="text-sm text-gray">Assigned Tickets</span>
      </div>
      <Link
        href="/tickets"
        className={cn(
          'mx-auto flex w-4/5 justify-between rounded-5 p-3 px-6 text-xs font-bold text-white',
          'bg-loadBlue transition-shadow hover:shadow-xl'
        )}
      >
        TAKE ME TO TICKETS
        <RightArrow />
      </Link>
      <div className="flex justify-center gap-16 border-t-2 border-vLightIndigo text-xs text-gray">
        <div className="my-6 flex flex-col gap-2">
          <div className="flex gap-1">
            Assigned Tickets:
            <span className="font-bold text-black">
              {user.number_of_assigned_tickets}
            </span>
          </div>
          <div className={cn('flex w-full', 'bg-loadGray')}>
            <div
              className="h-1 bg-loadBlue"
              style={{
                width: `${percentage}%`
              }}
            />
          </div>
        </div>
        <div className="my-6 flex flex-col gap-2">
          <div className="flex gap-1">
            Closed This Month:
            <span className="font-bold text-black">
              {user.number_of_closed_tickets}
            </span>
          </div>
          <div className={cn('flex w-full', 'bg-loadGray')}>
            <div
              className="h-1 bg-loadOrange"
              style={{ width: `${invPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TicketDash
