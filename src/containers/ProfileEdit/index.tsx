import { useSearchParams } from 'next/navigation'

import { useState } from 'react'

import { Button, DropDown, FormLine } from '@/components'
import { IOption } from '@/types/model'

const COUNTIES = [
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

const ProfileEdit = () => {
  const [country, setCountry] = useState<IOption>(COUNTIES[0])
  const edit = useSearchParams().get('edit')

  return (
    edit && (
      <article className="rounded-5 bg-white p-4">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold leading-6">Profile Details</h1>
          <Button active>Save</Button>
        </div>
        <div className="h-32 w-32 rounded-lg bg-gray" />
        <form className="scrollbar-primary mt-4 flex max-h-lg max-w-lg flex-wrap items-center gap-6 overflow-y-scroll">
          <FormLine className="w-80" id="name" required primary title="Name" />
          <DropDown
            title="Country"
            required
            setValue={setCountry}
            value={country}
            options={COUNTIES}
            className="w-80"
          />
          <FormLine
            className="w-80"
            id="password"
            required
            primary
            title="Password"
          />
          <FormLine
            className="w-80"
            id="confirm"
            required
            primary
            title="Confirm Password"
          />
        </form>
      </article>
    )
  )
}

export default ProfileEdit
