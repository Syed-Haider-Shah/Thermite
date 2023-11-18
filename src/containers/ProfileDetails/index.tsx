import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { Button, Card } from '@/components'

const ProfileDetails = () => {
  const pathname = usePathname()
  const edit = useSearchParams().get('edit')

  return edit ? null : (
    <Card title="profile" id="profile">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-semibold leading-6">Profile Details</h1>
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
      </div>
      <div className="flex gap-20">
        <div className="h-32 w-32 translate-x-5 rounded-xl bg-gray" />
        <div className="flex w-full flex-col gap-10">
          <div className="flex w-full max-w-md justify-between">
            <div>
              <h2 className="text-sm font-semibold leading-4">Name</h2>
              <p className="text-xl font-normal text-black/80">Ali Aizaz</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-4">Email</h2>
              <p className="break-words text-xl font-normal text-black/80">
                aliaizaz@gmail.com
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-4">Location</h2>
              <p className=" break-words text-xl font-normal text-black/80">
                Australia
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-sm justify-between">
            <div>
              <h2 className="text-sm font-semibold leading-4">Region</h2>
              <p className="text-xl font-normal text-black/80">AUS</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-4">Date Created</h2>
              <p className="text-xl font-normal text-black/80">{Date.now()}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProfileDetails
