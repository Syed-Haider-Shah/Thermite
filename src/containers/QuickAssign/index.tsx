import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { DropDown2 } from '@/components'
import { supabase } from '@/services/supabase'

const QuickAssign = () => {
  const [employees, setEmployees] = useState<string>('None')
  const [town, setTown] = useState<string>('None')
  const nav = useRouter()

  const setEasyAssign = async () => {
    const { error } = await supabase.rpc('bulk_assign', {
      employee: employees,
      assigntown: town
    })
    if (error) toast.error(error.message)
    else {
      toast.success('Town has been assigned successfully')
      nav.push('/tickets')
    }
  }

  const townList = async () => {
    const { data, error } = await supabase.rpc('list_of_town')
    if (data) setTownList(data)
    else if (error) toast.error(error.message)
  }
  const employeeList = async () => {
    const { data, error } = await supabase.rpc('list_of_employees')
    if (data) setEmployeeList(data)
    else if (error) toast.error(error.message)
  }
  const [townListVar, setTownList] = useState<string[]>(['Empty'])
  const [employeeListVar, setEmployeeList] = useState<string[]>(['Empty'])

  useEffect(() => {
    townList()
    employeeList()
  }, [])

  console.log(employees)

  return (
    <div className="relative flex h-[19.5rem] min-h-sm w-95 flex-col items-center gap-3 rounded-md border border-black/10 bg-white shadow-lg">
      <div className="mt-7 grid grid-cols-2 place-items-center justify-items-center gap-1 rounded-full border border-black/10 p-3 pt-2 shadow-lg">
        <div className="col-span-2 h-5 w-5 rounded-full bg-loadBlue/50"></div>
        <div className="h-5 w-5 rounded-full bg-loadBlue/50"></div>
        <div className="h-5 w-5 rounded-full bg-loadBlue/50"></div>
      </div>
      <div className="flex justify-center bg-white font-bold">EASY ASSIGN</div>
      <div className="min-h-1/2 absolute bottom-0 grid w-full grid-cols-2 gap-1 bg-gradient-to-tl from-loadBlue to-loadBlue/90 p-4 shadow-lg">
        <div className="flex flex-col items-center p-2">
          <div className=" font-bold text-white">Town</div>
          <DropDown2
            options={townListVar}
            setValue={setTown}
            value={town}
            variation="primary"
            className="min-w-24 mb-0  w-24 -space-y-4"
          />
        </div>
        <div className="flex flex-col items-center p-2 font-light">
          <div className="font-bold text-white">Employee</div>
          <DropDown2
            options={employeeListVar}
            setValue={setEmployees}
            value={employees}
            variation="primary"
            className="min-w-24 mb-0  w-24 -space-y-4"
          />
        </div>
        <button
          onClick={() => setEasyAssign()}
          className="col-span-2 flex w-full items-center justify-center rounded bg-white/10 p-2 text-sm font-medium text-white transition-shadow hover:font-normal hover:shadow-lg"
        >
          Confirm Changes
        </button>
      </div>
    </div>
  )
}

export default QuickAssign
