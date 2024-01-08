import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { Button } from '@/components'
import { IEmployee } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'

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
    <section className="rounded-md bg-white">
      <div className="flex justify-between rounded-t-md bg-darkIndigo p-2 text-white">
        <h1 className="font-semibold leading-6">Profile Details</h1>
        {!hideEdit && (
          <Link
            href={{
              pathname,
              query: {
                edit: true
              }
            }}
          >
            <Button className="border-0" active>
              Edit
            </Button>
          </Link>
        )}
      </div>
      <div
        className={cn('grid min-w-95 grid-cols-2 p-4', {
          'flex flex-col gap-2': !hideEdit
        })}
      >
        <div className="flex flex-col items-center text-center text-black/90">
          {user.image_url ? (
            <Image
              src={user.image_url}
              alt="avatar"
              className="mb-3 h-32 w-32 rounded-full bg-darkGray"
              width={128}
              height={128}
            />
          ) : (
            <div className="h-32 w-32 rounded-full bg-darkGray" />
          )}
          <h2 className="text-lg">{user.name}</h2>
          <p className="text-sm font-bold">{user.country}</p>
        </div>
        <ul className="flex w-full flex-col gap-2 rounded-md border border-black/10 bg-white">
          <li className="grid grid-cols-2 border-b border-black/10 p-2">
            <h2 className="text-sm font-semibold leading-4">Role</h2>
            <p className=" font-normal text-black/80">{user.role}</p>
          </li>
          <li className="grid grid-cols-2 border-b border-black/10 p-2">
            <h2 className="text-sm font-semibold leading-4">Date Created</h2>
            <p className="mt-1 font-normal text-black/80">
              {new Date(user.created_at).toDateString()}
            </p>
          </li>
          <li className="grid grid-cols-2 border-b border-black/10 p-2">
            <h2 className="text-sm font-semibold leading-4">
              Assigned Tickets
            </h2>
            <p className=" font-normal text-black/80">
              {user.number_of_assigned_tickets}
            </p>
          </li>
          <li className="grid grid-cols-2 p-2">
            <h2 className="text-sm font-semibold leading-4">Closed Tickets</h2>
            <p className=" font-normal text-black/80">
              {user.number_of_closed_tickets}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProfileDetails
