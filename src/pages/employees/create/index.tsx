import { useRouter } from 'next/router'

import { useState } from 'react'

import { Button, DropDown, FormLine } from '@/components'
import { Modal } from '@/containers'
import { IOption } from '@/types/model'

const ROLES = [
  { name: 'Employee', value: 'user' },
  { name: 'Admin', value: 'admin' },
  { name: 'Super User', value: 'superuser' }
]

const COUNTIES = [
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

const CreateEmployee = () => {
  const [country, setCountry] = useState<IOption>(COUNTIES[0])
  const [role, setRole] = useState<IOption>(ROLES[0])
  const router = useRouter()

  return (
    <Modal showModal onClose={router.back} title="Create Employee">
      <form className="relative space-y-5">
        <div className="mt-5 flex flex-1 flex-wrap gap-6 rounded-5 bg-lightGray p-5">
          <div className="flex w-full flex-col items-center space-y-2">
            <div className="h-28 w-28 rounded-full bg-lightIndigo" />
            <Button className="border border-black/10 bg-transparent px-7 py-1.5 text-black/90">
              Upload Image
            </Button>
          </div>
          <FormLine id="name" title="Name" primary className="w-80" />
          <FormLine id="email" title="Email" primary className="w-80" />
          <FormLine id="password" title="Password" primary className="w-80" />
          <DropDown
            title="Country"
            name="country"
            setValue={setCountry}
            value={country}
            options={COUNTIES}
            className="w-80"
          />
          <DropDown
            setValue={setRole}
            value={role}
            title="Role"
            name="role"
            options={ROLES}
            className="w-80"
          />
        </div>
        <div className="mb-2 flex w-full justify-end pr-3">
          <Button type="submit" active>
            Create
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateEmployee
