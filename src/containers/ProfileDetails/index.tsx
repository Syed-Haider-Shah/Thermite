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
    <section className="rounded-md bg-darkIndigo text-white shadow-lg">
      <div className="flex justify-between rounded-t-md bg-darkIndigo p-6 px-10 text-white">
        <h1 className="text-lg font-semibold leading-6">DETAILS</h1>
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
        className={cn('grid min-w-95 grid-cols-2 items-center pb-4 ', {
          'flex flex-col gap-10': !hideEdit
        })}
      >
        <div className="flex flex-col items-center gap-4  text-center text-black/90">
          {user.image_url ? (
            <Image
              src={user.image_url}
              alt="avatar"
              className="h-32 w-32 rounded-full bg-darkGray "
              width={128}
              height={128}
            />
          ) : (
            <div className="h-32 w-32 rounded-full border-4 border-gray bg-white/20 shadow-lg" />
          )}
          <div className="">
            <h2 className="text-lg text-white">{user.name}</h2>
            <p className="text-sm font-bold text-white/80">{user.country}</p>
          </div>
        </div>
        <ul className="flex w-[20rem] flex-row flex-wrap justify-between gap-2 border-t border-white bg-darkIndigo">
          <li>
            <li className="flex flex-col  justify-start gap-2 p-2 pt-4">
              <h2 className="text-base font-semibold leading-4">ROLE</h2>
              <p className=" text-sm font-light text-white">{user.fe_role}</p>
            </li>
            <li className="flex flex-col items-start justify-start gap-2  p-2">
              <h2 className="text-base font-semibold leading-4">
                DATE CREATED
              </h2>
              <p className="mt-1 text-sm font-light text-white">
                {new Date(user.created_at).toDateString()}
              </p>
            </li>
          </li>
          <li>
            <li className="flex flex-col gap-2 p-2 pt-4">
              <h2 className=" text-base font-semibold leading-4">ASSIGNED</h2>
              <p className=" text-center text-sm font-light text-white">
                {user.number_of_assigned_tickets}
              </p>
            </li>
            <li className="flex flex-col gap-2  p-2">
              <h2 className=" text-center text-base font-semibold leading-4">
                CLOSED
              </h2>
              <p className=" text-center text-sm font-light text-white">
                {user.number_of_closed_tickets}
              </p>
            </li>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProfileDetails
