import Link from 'next/link'

import { WaterVial } from '@/components'
import { Paths } from '@/constants'

const Forms = () => {
  return (
    <>
      <div className="ml-10 text-xl font-bold">Forms</div>
      <div className="ml-10 mt-5">
        <Link
          href={Paths.FORM_WATER}
          className="flex h-50.5 w-80 flex-col items-center rounded-md bg-white pt-10 font-bold text-darkIndigo shadow-lg hover:shadow-xl"
        >
          <div className="text-lg">Water Sample Submission Form</div>
          <div className="pt-6">
            <WaterVial />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Forms
