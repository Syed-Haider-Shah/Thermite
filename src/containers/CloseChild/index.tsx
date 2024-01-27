import { useParams, useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, TextArea } from '@/components'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { CloseChildSchema } from '@/utils/yupConfig'

const FAILURE = [
  { name: 'Acoustic Box - H', value: '' },
  { name: 'Air Filter - F', value: '' },
  { name: 'Battery (E/F/FP) 070-0035-00', value: '' },
  { name: 'CAN Cable - G', value: '' },
  { name: 'Condenser Flowmeter - G', value: '' },
  { name: 'Condenser Pump Assmbly, Clocking Flowmeter', value: '' },
  { name: 'Condenser Supply Hose', value: '' }
]
const CAUSE = [
  { name: 'False Positive', value: '' },
  { name: 'Firmware Bug', value: '' },
  { name: 'Physical Damage', value: '' },
  { name: 'No Failure Present', value: '' },
  { name: 'Clog', value: '' },
  { name: 'Component does not run at setpoint', value: '' },
  { name: 'Plumbing Issue', value: '' },
  { name: 'Wheel Dropout', value: '' }
]
const RESOLUTIONS = [
  { name: 'Resolved - First Contact Resolution', value: '' },
  { name: 'Resolved - No Filed Service Visit Required', value: '' },
  { name: 'Repaired - Field Service Visit Completed', value: '' },
  { name: 'Replaced - New Panel - Filed Service Visit', value: '' },
  { name: 'Removed Panel', value: '' },
  { name: 'SENT_KNOWLEDGE_DOCUMENT_LINK', value: '' },
  { name: 'FEATURE_REQUEST_TRACKED', value: '' },
  { name: 'Environmental Reasons - No Action Required', value: '' }
]

const CloseChild = () => {
  const [confirmedFailure, setConfirmedFailure] = useState<IOption>(FAILURE[0])
  const [cause, setCause] = useState<IOption>(CAUSE[0])
  const [resolution, setResolution] = useState<IOption>(RESOLUTIONS[0])
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const { cid } = useParams() || { cid: '' }
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CloseChildSchema),
    mode: 'onBlur',
    defaultValues: {
      description: ''
    }
  })

  const handleCloseChild = useCallback(
    async ({ description }: { description?: string }) => {
      setIsSaving(true)
      const { error } = await supabase.rpc('close_child_ticket', {
        c_id: Number(cid),
        c_confirmed_fault: confirmedFailure.name,
        c_cause: cause.name,
        c_description: description || '',
        c_resolution: resolution.name
      })
      setIsSaving(false)

      if (error) toast.error(error.message)
      else {
        toast.success('Ticket Closed Successfully')
        router.back()
      }
    },
    [cid, confirmedFailure.name, cause.name, resolution.name, router]
  )

  return (
    <form
      onSubmit={handleSubmit(handleCloseChild)}
      className="mt-5 flex flex-1 flex-wrap gap-4 rounded-5 bg-lightGray p-5"
    >
      <DropDown
        title="CONFIRMED FAILURE"
        value={confirmedFailure}
        setValue={setConfirmedFailure}
        options={FAILURE}
        className="w-80"
      />
      <DropDown
        title="RESOLUTION"
        value={resolution}
        setValue={setResolution}
        options={RESOLUTIONS}
        className="w-80"
      />
      <DropDown
        title="CAUSE"
        value={cause}
        setValue={setCause}
        options={CAUSE}
        className="w-80"
      />
      <TextArea
        id="solution"
        title="Solution Description"
        {...register('description')}
        error={errors.description?.message}
        primary
        rows={4}
        className="w-sm text-black/60"
      />
      <div className="mr-2 flex w-full flex-row-reverse">
        <Button type="submit" isLoading={isSaving} active>
          Close Ticket
        </Button>
      </div>
    </form>
  )
}

export default CloseChild
