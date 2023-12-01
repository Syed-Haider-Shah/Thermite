import { useState } from 'react'

import { Button, DropDown, TextArea } from '@/components'
import { IOption } from '@/types/model'

const FAULTS = [{ name: 'Fault', value: '' }]
const PARTS = [{ name: 'Parts', value: '' }]
const RESOLUTIONS = [{ name: 'Resolution', value: '' }]

const CloseChild = () => {
  const [fault, setFault] = useState<IOption>(FAULTS[0])
  const [part, setPart] = useState<IOption>(PARTS[0])
  const [resolution, setResolution] = useState<IOption>(RESOLUTIONS[0])

  return (
    <form className="mt-5 flex flex-1 flex-wrap gap-6 rounded-5 bg-lightGray p-5">
      <DropDown
        title="Fault"
        value={fault}
        setValue={setFault}
        options={FAULTS}
        className="w-80"
      />
      <DropDown
        title="Parts"
        value={part}
        setValue={setPart}
        options={PARTS}
        className="w-80"
      />
      <DropDown
        title="Resolution"
        value={resolution}
        setValue={setResolution}
        options={RESOLUTIONS}
        className="w-80"
      />
      <TextArea
        id="solution"
        title="Solution Description"
        primary
        rows={4}
        className="w-sm"
      />
      <div className="mr-2 flex w-full flex-row-reverse">
        <Button active>Close Ticket</Button>
      </div>
    </form>
  )
}

export default CloseChild
