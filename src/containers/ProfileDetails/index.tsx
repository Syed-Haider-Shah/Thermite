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

  console.log(!!edit)

  return edit ? null : (
    <Card title="profile" id="profile" className="h-min">
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
      <div className="flex w-full flex-wrap gap-10 [&>div]:min-w-[120px]">
        <div>
          <h2 className="text-sm font-semibold leading-4">Name</h2>
          <p className="text-lg font-normal text-black/80">{user.name}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold leading-4">Country</h2>
          <p className=" break-words text-lg font-normal text-black/80">
            {`${user.country}`}
          </p>
        </div>
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
        <div>
          <h2 className="text-sm font-semibold leading-4">Assigned Tickets</h2>
          <p className="text-lg font-normal text-black/80">
            {user.number_of_assigned_tickets}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold leading-4">Closed Tickets</h2>
          <p className="text-lg font-normal text-black/80">
            {user.number_of_closed_tickets}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default ProfileDetails
