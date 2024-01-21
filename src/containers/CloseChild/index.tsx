import { useParams, useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, TextArea } from '@/components'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { CloseChildSchema } from '@/utils/yupConfig'

const FAULTS = [{ name: 'Fault', value: '' }]
const PARTS = [{ name: 'Parts', value: '' }]
const RESOLUTIONS = [{ name: 'Resolution', value: '' }]

const CloseChild = () => {
  const [fault, setFault] = useState<IOption>(FAULTS[0])
  const [part, setPart] = useState<IOption>(PARTS[0])
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
    async ({ description }: { description: string }) => {
      setIsSaving(true)
      const { error } = await supabase.rpc('close_child_ticket', {
        c_id: Number(cid),
        c_confirmed_fault: fault.value,
        c_cause: part.value,
        c_description: description,
        c_resolution: resolution.value
      })
      setIsSaving(false)

      if (error) toast.error(error.message)
      else {
        toast.success('Ticket Closed Successfully')
        router.back()
      }
    },
    [cid, fault.value, part.value, resolution.value, router]
  )

  return (
    <form
      onSubmit={handleSubmit(handleCloseChild)}
      className="mt-5 flex flex-1 flex-wrap gap-4 rounded-5 bg-lightGray p-5"
    >
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
        {...register('description')}
        error={errors.description?.message}
        primary
        rows={4}
        className="w-sm"
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
