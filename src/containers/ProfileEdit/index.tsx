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

const REGIONS = [
  {
    name: 'Asia',
    value: 'asia'
  },
  { name: 'Australia', value: 'au' }
]

const ProfileEdit = () => {
  const [country, setCountry] = useState<IOption>(COUNTIES[0])
  const [region, setRegion] = useState<IOption>(REGIONS[0])
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
          <FormLine className="w-80" id="name" primary title="Name" />
          <DropDown
            title="Country"
            required
            setValue={setCountry}
            value={country}
            options={COUNTIES}
            className="w-80"
          />
          <div>
            <h1 className="text-sm font-semibold text-black/90">Region</h1>
            <DropDown
              setValue={setRegion}
              value={region}
              required
              title="Region"
              options={REGIONS}
              className="w-80"
            />
          </div>
          <FormLine className="w-80" id="password" primary title="Password" />
          <FormLine
            className="w-80"
            id="confirm"
            primary
            title="Confirm Password"
          />
        </form>
      </article>
    )
  )
}

export default ProfileEdit
