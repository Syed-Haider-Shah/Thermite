import { useParams, useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, TextArea } from '@/components'
import { INDICATED_FAILURES_OPTIONS } from '@/constants'
import { CAUSE_OPTIONS, RESOLUTIONS_OPTIONS } from '@/constants/Options'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { CloseChildSchema } from '@/utils/yupConfig'

const CloseChild = () => {
  const [confirmedFailure, setConfirmedFailure] = useState<IOption>(
    INDICATED_FAILURES_OPTIONS[0]
  )
  const [cause, setCause] = useState<IOption>(CAUSE_OPTIONS[0])
  const [resolution, setResolution] = useState<IOption>(RESOLUTIONS_OPTIONS[0])
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
        options={INDICATED_FAILURES_OPTIONS}
        className="w-80"
      />
      <DropDown
        title="RESOLUTION"
        value={resolution}
        setValue={setResolution}
        options={RESOLUTIONS_OPTIONS}
        className="w-80"
      />
      <DropDown
        title="CAUSE"
        value={cause}
        setValue={setCause}
        options={CAUSE_OPTIONS}
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
