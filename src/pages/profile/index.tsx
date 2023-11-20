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
import { ProfileDetails, ProfileEdit } from '@/containers'

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
      <ProfileDetails />
      <ProfileEdit />
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