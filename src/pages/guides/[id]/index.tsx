import Image from 'next/image'
import Link from 'next/link'

import { Button, Card, DownArrowIcon, Download } from '@/components'
import { Paths } from '@/constants'

const GuideById = () => {
  return (
    <Card>
      <h1 className="flex items-center gap-4 text-xl font-semibold text-black">
        <Link
          href={Paths.GUIDE}
          className="flex items-center gap-2 rounded-1.25 border px-2 text-sm text-black/60 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <DownArrowIcon color="gray" className="rotate-90" />
          Back
        </Link>
        Installation Guide
      </h1>
      <Image
        src="/guideVideo.png"
        alt="guide"
        width={800}
        height={450}
        className="aspect-video rounded-5 object-cover"
      />
      <ul className="space-y-3">
        <li className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5 transition-shadow duration-300 hover:shadow-lg">
          <div className="space-y-2 text-sm">
            <h1 className="font-semibold leading-4">
              Source GUI Installation Instruction
            </h1>
            <p className="font-medium text-black/60">NEW 07/29/2023</p>
          </div>
          <Button className="bg-black text-white" active>
            <Download /> Download
          </Button>
        </li>
        <li className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5 transition-shadow duration-300 hover:shadow-lg">
          <div className="space-y-2 text-sm">
            <h1 className="font-semibold leading-4">
              Source GUI Installation Instruction
            </h1>
            <p className="font-medium text-black/60">NEW 07/29/2023</p>
          </div>
          <Button className="bg-black text-white" active>
            <Download /> Download
          </Button>
        </li>
      </ul>
    </Card>
  )
}

export default GuideById
