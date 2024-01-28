import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import {
  AvatarImage,
  Button,
  Card,
  DropDown,
  FormLine,
  ImagePicker
} from '@/components'
import { COUNTRY_OPTIONS } from '@/constants'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { uploadImage } from '@/utils/uploadFile'
import { UpdateNameSchema, UpdatePasswordSchema } from '@/utils/yupConfig'

const ProfileEdit = () => {
  const { user } = useAuth()

  const [country, setCountry] = useState<IOption>(
    COUNTRY_OPTIONS.find((val) => val.value === user.country) ||
      COUNTRY_OPTIONS[0]
  )

  const [image, setImage] = useState<File | null>(null)
  const [imageSrc, setImageSrc] = useState<string>(user.image_url)
  const [isSavingPass, setIsSavingPass] = useState<boolean>(false)
  const [isSavingUser, setIsSavingUser] = useState<boolean>(false)

  const edit = useSearchParams().get('edit')
  const pathname = usePathname()

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors }
  } = useForm({
    resolver: yupResolver(UpdatePasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirm: ''
    }
  })

  const {
    register: registerUpdate,
    handleSubmit: handleUpdateSubmit,
    formState: { errors: updateErrors }
  } = useForm({
    resolver: yupResolver(UpdateNameSchema),
    mode: 'onBlur',
    defaultValues: {
      name: user.name || ''
    }
  })

  const handleUpdatePassword = useCallback(
    async ({ password }: { password: string }) => {
      setIsSavingPass(true)
      const { error } = await supabase.auth.updateUser({
        password
      })
      setIsSavingPass(false)

      if (error) toast.error(error.message)
      else toast.success('Password updated successfully')
    },
    []
  )

  const handleUpdateUser = useCallback(
    async ({ name }: { name: string }) => {
      setIsSavingUser(true)

      let filePath: string = ''
      let deleteImage: () => Promise<void> = async () => {}
      if (image) {
        const { url, onDelete, error } = await uploadImage(
          image,
          'avatars',
          user.id
        )
        if (error) {
          setIsSavingUser(false)
          return
        }
        filePath = url
        deleteImage = onDelete
      }

      const { error } = await supabase
        .from('employees')
        .update({
          name,
          country: country.value,
          image_url: filePath
        })
        .eq('id', user.id)

      setIsSavingUser(false)

      if (error) {
        toast.error(error.message)
        await deleteImage()
      } else toast.success('Profile updated successfully')
    },
    [country.value, image, user.id]
  )

  return (
    edit && (
      <Card id="update-profile" title="Update Profile" className="max-w-sm">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold leading-6">Profile Edit</h1>
          <Link
            href={{
              pathname
            }}
          >
            <Button active>Details</Button>
          </Link>
        </div>
        <form
          onSubmit={handleUpdateSubmit(handleUpdateUser)}
          className="flex flex-wrap items-center gap-x-6 rounded-5 bg-lightGray p-4"
        >
          <ImagePicker setAvatar={setImage} setAvatarSrc={setImageSrc}>
            <AvatarImage avatarSrc={imageSrc} />
          </ImagePicker>
          <FormLine
            title="Name"
            className="w-80"
            id="name"
            error={updateErrors.name?.message}
            required
            primary
            {...registerUpdate('name')}
          />
          <DropDown
            title="Country"
            required
            setValue={setCountry}
            value={country}
            options={COUNTRY_OPTIONS}
            className="w-80"
          />
          <Button
            type="submit"
            isLoading={isSavingUser}
            className="py-2"
            active
          >
            Update Details
          </Button>
        </form>
        <form
          onSubmit={handlePasswordSubmit(handleUpdatePassword)}
          className="flex flex-wrap items-center gap-x-6 rounded-5 bg-lightGray p-4"
        >
          <FormLine
            className="w-80"
            id="password"
            {...registerPassword('password')}
            error={passwordErrors.password?.message}
            type="password"
            required
            primary
            title="Password"
          />
          <FormLine
            className="w-80"
            id="confirm"
            {...registerPassword('confirm')}
            error={passwordErrors.confirm?.message}
            type="password"
            required
            primary
            title="Confirm Password"
          />
          <Button
            isLoading={isSavingPass}
            type="submit"
            className="h-min py-2"
            active
          >
            Update Password
          </Button>
        </form>
      </Card>
    )
  )
}

export default ProfileEdit
