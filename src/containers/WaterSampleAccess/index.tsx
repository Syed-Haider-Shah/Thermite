import Link from 'next/link'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/services/supabase'

const WaterSampleAccess = () => {
  const [waterCount, setWaterCount] = useState(0)

  const { user } = useAuth()

  const fetchWaterSampleCount = useCallback(async () => {
    const { error, count } = await supabase
      .from('Parent')
      .select('', { count: 'exact' })
      .eq('employee', user.id)
      .eq('status', 'WATER-SAMPLE')

    if (error) toast.error(error.message)
    else if (count) setWaterCount(count)
  }, [user.id])

  useEffect(() => {
    fetchWaterSampleCount()
  }, [fetchWaterSampleCount])

  return (
    <div className=" m-4 flex max-h-96 min-h-sm min-w-95 translate-x-8 flex-col justify-between rounded-md bg-loadBlue shadow-lg">
      <Link
        href="/"
        className=" m-2 flex items-center justify-center rounded-md bg-white/10 p-4 text-white transition-all hover:shadow-lg"
      >
        Water Sample Form
      </Link>
      <div className="flex flex-col items-center justify-center text-white">
        <div className=" text-3xl font-bold">{waterCount}</div>
        <div className="text-sm">Submittions left</div>
      </div>
      <div className=" bg- flex h-2/6 border-t border-white/50">
        <div className="flex w-1/2 flex-col items-center justify-center border-r border-white/50">
          <div className="text-lg font-bold text-white">30%</div>
          <div className="text-xs text-white">Submitted / Closed %</div>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="text-lg font-bold text-white">430</div>
          <div className="text-xs text-white">Filter Tickets Available</div>
        </div>
      </div>
    </div>
  )
}

export default WaterSampleAccess
