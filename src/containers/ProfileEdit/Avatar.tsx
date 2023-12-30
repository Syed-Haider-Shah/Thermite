import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { AvatarImage } from '@/components'

type IAvatar = {
  avatarUrl: string
  setAvatar: Dispatch<SetStateAction<File | null>>
}

const Avatar = ({ avatarUrl, setAvatar }: IAvatar) => {
  const [avatarSrc, setAvatarSrc] = useState<string>()

  useEffect(() => {
    setAvatarSrc(avatarUrl)
  }, [avatarUrl])

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0]
    if (imgFile) {
      setAvatar(imgFile)
      const reader = new FileReader()
      reader.onload = () => {
        setAvatarSrc(reader.result as string)
      }
      reader.readAsDataURL(imgFile)
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <AvatarImage avatarSrc={avatarSrc} />
      <label
        htmlFor="avatar"
        title="avatar"
        className="rounded-xl border px-2 py-1 text-xs font-medium text-black/90"
      >
        Upload New Image
        <input
          onChange={handleProfileImageChange}
          id="avatar"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  )
}

export default Avatar
