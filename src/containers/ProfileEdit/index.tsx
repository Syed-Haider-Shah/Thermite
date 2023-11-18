import { useSearchParams } from 'next/navigation'

import { Button, DropDown, FormLine } from '@/components'

const ProfileEdit = () => {
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
          <div>
            <h1 className="text-sm font-semibold text-black/90">Country</h1>
            <DropDown
              options={[{ name: 'Country', value: '' }]}
              name="status"
              className="w-80"
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-black/90">Region</h1>
            <DropDown
              options={[{ name: 'Region', value: '' }]}
              name="status"
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
