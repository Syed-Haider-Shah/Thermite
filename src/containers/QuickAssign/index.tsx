import { useState } from 'react'

import { DropDown } from '@/components'
import { IOption } from '@/types/model'

const Towns = [
  {
    name: 'Walgett',
    value: 'Walgett'
  }
]

const Employees = [
  {
    name: 'Ali Aizaz',
    value: '123'
  }
]

const QuickAssign = () => {
  const [town, setTown] = useState<IOption>(Towns[0])
  const [employees, setEmployees] = useState<IOption>(Employees[0])

  return (
    <div className="relative flex h-[19.5rem] min-h-sm w-95 flex-col items-center gap-3 overflow-hidden rounded-md border border-black/10 bg-white shadow-lg">
      <div className="mt-7 grid grid-cols-2 place-items-center justify-items-center gap-1 rounded-full border border-black/10 p-3 pt-2 shadow-lg">
        <div className="col-span-2 h-5 w-5 rounded-full bg-loadBlue/50"></div>
        <div className="h-5 w-5 rounded-full bg-loadBlue/50"></div>
        <div className="h-5 w-5 rounded-full bg-loadBlue/50"></div>
      </div>
      <div className="flex justify-center bg-white font-bold">EASY ASSIGN</div>
      <div className="min-h-1/2 absolute bottom-0 grid w-full grid-cols-2 gap-1 bg-gradient-to-tl from-loadBlue to-loadBlue/90 p-4 shadow-lg">
        <div className="flex flex-col items-center p-2">
          <div className=" font-bold text-white">Town</div>
          <DropDown
            options={Towns}
            setValue={setTown}
            value={town}
            className="min-w-24 mb-0 w-24 -space-y-4 decoration-white decoration-2 underline-offset-4 transition-all hover:underline"
            variation="primary"
          />
        </div>
        <div className="flex flex-col items-center p-2 font-light">
          <div className="font-bold text-white">Employee</div>
          <DropDown
            options={Employees}
            setValue={setEmployees}
            value={employees}
            className="min-w-24 mb-0  w-24 -space-y-4 decoration-white decoration-2 underline-offset-4 transition-all hover:underline"
            variation="primary"
          />
        </div>
        <button className="col-span-2 flex w-full items-center justify-center rounded bg-white/10 p-2 text-sm font-medium text-white transition-shadow hover:font-normal hover:shadow-lg">
          Confirm Changes
        </button>
      </div>
    </div>
  )
}

export default QuickAssign
