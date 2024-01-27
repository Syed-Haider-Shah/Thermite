import { Dispatch, ReactNode, SetStateAction } from 'react'
import toast from 'react-hot-toast'

import { cn } from '@/utils/cn'

type IAvatar = {
  setAvatar: Dispatch<SetStateAction<File | null>>
  children?: ReactNode
  setAvatarSrc?: Dispatch<SetStateAction<string>>
  className?: string
}

const Avatar = ({ setAvatar, children, setAvatarSrc, className }: IAvatar) => {
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // If file is larger than 2MBs throw error
    if (e.target.files && e.target.files[0]?.size > 2097152) {
      toast.error('File is too big')
      return
    }

    const imgFile = e.target.files?.[0]
    if (imgFile) {
      setAvatar(imgFile)
      if (!setAvatarSrc) return
      const reader = new FileReader()
      reader.onload = () => {
        setAvatarSrc(reader.result as string)
      }
      reader.readAsDataURL(imgFile)
    }
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-2 text-xs font-medium text-black/90',
        className
      )}
    >
      {children}
      <label
        htmlFor="avatar"
        title="avatar"
        className="cursor-pointer rounded-xl border px-2 py-1"
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
