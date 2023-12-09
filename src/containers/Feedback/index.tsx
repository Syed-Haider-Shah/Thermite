import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, FormLine, TextArea } from '@/components'
import { supabase } from '@/services/supabase'
import { CreateFeedSchema } from '@/utils/yupConfig'

type TFeedback = {
  title: string
  context: string
}

const Feedback = ({ onBlur }: { onBlur: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CreateFeedSchema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      context: ''
    }
  })

  const handleCreateFeadback = useCallback(
    async ({ title, context }: TFeedback) => {
      setIsLoading(true)

      const { error } = await supabase
        .from('Feedback')
        .insert({ title, context })

      setIsLoading(false)

      if (error) toast.error(error.message)
      else onBlur()
    },
    [onBlur]
  )

  return (
    <form
      onSubmit={handleSubmit(handleCreateFeadback)}
      className="top-22 absolute z-30 w-95 animate-fade rounded-2.5 border border-black/5 bg-white p-4 shadow-lg"
    >
      <FormLine
        {...register('title')}
        error={errors.title?.message}
        title="Title"
        id="title"
        primary
      />
      <TextArea
        {...register('context')}
        error={errors.context?.message}
        title="Context"
        id="context"
        rows={3}
        primary
      />
      <Button
        type="submit"
        isLoading={isLoading}
        className="mt-2 w-full"
        active
      >
        Submit
      </Button>
    </form>
  )
}

export default Feedback
