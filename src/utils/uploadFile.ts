import toast from 'react-hot-toast'

import { supabaseStorageUrl } from '@/constants'
import { supabase } from '@/services/supabase'

export const uploadImage = async (
  photoFile: File,
  folder: 'avatars' | 'water_sample',
  name: string
) => {
  const bucket = supabase.storage.from('thermite_bucket')
  const fileName = `${folder}/${name}`

  const { data, error } = await bucket.upload(fileName, photoFile, {
    cacheControl: '3600',
    upsert: true
  })

  if (error) toast.error(error.message)
  else if (data)
    return {
      url: `${supabaseStorageUrl}/${fileName}`,
      onDelete: async () => {
        const { error: delError } = await bucket.remove([fileName])

        if (delError) toast.error(delError.message)
      }
    }

  return {
    error,
    url: '',
    onDelete: async () => {}
  }
}
