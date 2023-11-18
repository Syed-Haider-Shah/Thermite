import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Button,
  Card,
  DropDown,
  SearchBar,
  Table,
  UnionIcon
} from '@/components'
import { Paths } from '@/constants'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'serial_number',
    name: 'Serial Number'
  },
  {
    field: 'address',
    name: 'Address'
  },
  {
    field: 'region',
    name: 'Region'
  },
  {
    field: 'coordinates',
    name: 'Coordinates'
  },
  {
    field: 'installation_date',
    name: 'Installation Date'
  },
  {
    field: 'number_of_panels',
    name: 'Number of Panels'
  }
]

const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'active', name: 'Active' },
  { value: 'completed', name: 'Completed' }
]

const Profile = () => {
  const pathname = usePathname()

  return (
    <>
      <Card title="profile" id="profile">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold leading-6">Profile Details</h1>
          <Button active>Edit</Button>
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
                <h2 className="text-sm font-semibold leading-4">
                  Date Created
                </h2>
                <p className="text-xl font-normal text-black/80">
                  {Date.now()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex justify-between">
          <SearchBar placeholder="Search for Tickets" />
          <div className="flex gap-x-2">
            <Link href={`${pathname}${Paths.CREATE}`}>
              <Button className="group rounded-xl border border-black/5 bg-white px-4 font-medium text-black/60">
                <UnionIcon />
                New Child Ticket
              </Button>
            </Link>
            <DropDown options={OPTIONS} name="category" />
          </div>
        </div>
        <Table cols={cols} rows={[]} />
      </Card>
    </>
  )
}

export default Profile
