import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { Button, Card } from '@/components'
import { IEmployee } from '@/types/supabaseTables'

const ProfileDetails = ({
  user,
  hideEdit
}: {
  user: IEmployee
  hideEdit?: boolean
}) => {
  const pathname = usePathname()
  const edit = useSearchParams().get('edit')

  return edit ? null : (
    <Card title="profile" id="profile">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-semibold leading-6">Profile Details</h1>
        {hideEdit ? null : (
          <Link
            href={{
              pathname,
              query: {
                edit: true
              }
            }}
          >
            <Button active>Edit</Button>
          </Link>
        )}
      </div>
      <div className="flex gap-20">
        <div className="h-32 w-32 translate-x-5 rounded-xl bg-gray" />
        <div className="flex w-full flex-col gap-10">
          <div className="flex w-full max-w-md justify-between">
            <div>
              <h2 className="text-sm font-semibold leading-4">Name</h2>
              <p className="text-lg font-normal text-black/80">{user.name}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-4">Email</h2>
              <p className="break-words text-lg font-normal text-black/80">
                {user.email}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-4">Country</h2>
              <p className=" break-words text-lg font-normal text-black/80">
                {`${user.country}`}
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-sm justify-between gap-10">
            <div>
              <h2 className="text-sm font-semibold leading-4">Role</h2>
              <p className="text-lg font-normal text-black/80">{user.role}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-4">Date Created</h2>
              <p className="mt-1 text-base font-normal text-black/80">
                {new Date(user.created_at).toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProfileDetails
