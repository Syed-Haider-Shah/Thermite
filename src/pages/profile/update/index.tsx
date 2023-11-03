import Head from 'next/head'

import { FormLine, Upload } from '@/components'

const UpdateProfile = () => {
  return (
    <>
      <Head>
        <title>Update Profile | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <form
        id="edit-profile"
        className="p-10 w-full bg-lightYellow h-full flex flex-col gap-5"
      >
        <div>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <p className="text-xl">
            Hi, haider here you can change your profile settings
          </p>
        </div>
        <div className="text-xl font-semibold text-black/60 flex gap-4 items-center">
          <button
            type="button"
            className="bg-black/10 rounded-full p-10 w-max hover:bg-black/20 transition-colors duration-300"
          >
            <Upload />
          </button>
          Change Image
        </div>
        <FormLine id="name" title="Name" className="max-w-sm" />
        <FormLine id="email" title="Email" className="max-w-sm" />
        <FormLine id="phone" title="Phone" className="max-w-sm" />
        <FormLine
          id="changePassword"
          title="Change Password"
          className="max-w-sm"
        />
        <button className="text-white bg-indigo px-4 pt-2 pb-1.5 text-xl font-bold max-w-sm rounded-xl">
          Submit
        </button>
      </form>
    </>
  )
}

export default UpdateProfile
