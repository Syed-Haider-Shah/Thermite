import Link from 'next/link'

import { Card, DownloadIcon } from '@/components'

const Guides = () => {
  return (
    <Card title="softwares" id="softwares">
      <h1 className="ml-5 text-xl font-semibold leading-6">Softwares</h1>
      <div className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5">
        <div className="space-y-2 overflow-hidden text-sm">
          <div className="flex justify-between">
            <h1 className="font-semibold leading-4">Gen G Firmware</h1>
            <Link href="guides" className="hidden text-base md:block">
              Installation Instruction for the source GUI
            </Link>
          </div>
          <div className="h-[0.05rem] w-screen bg-black/40"></div>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">4.10.3</p>
            <DownloadIcon />
            <p className="text-loadOrange">NEW</p>
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">4.8.3</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">4.8.1</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">4.3.0</p>
            <DownloadIcon />
          </Link>
        </div>
      </div>
      <div className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5">
        <div className="space-y-2 overflow-hidden text-sm">
          <div className="flex justify-between">
            <h1 className="font-semibold leading-4">Gen F Firmware</h1>
            <Link href="guides" className="hidden text-base md:block">
              Installation Instruction for the source GUI
            </Link>
          </div>
          <div className="h-[0.05rem] w-screen bg-black/40"></div>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">3.10.4</p>
            <DownloadIcon />
            <p className="text-loadOrange">NEW</p>
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">3.10.3</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">3.10.1</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">3.8.1</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">3.6.3</p>
            <DownloadIcon />
          </Link>
        </div>
      </div>
      <div className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5">
        <div className="space-y-2 overflow-hidden text-sm">
          <div className="flex justify-between">
            <h1 className="font-semibold leading-4">Gen E Firmware</h1>
            <Link href="guides" className="hidden text-base md:block">
              Installation Instruction for the source GUI
            </Link>
          </div>
          <div className="h-[0.05rem] w-screen bg-black/40"></div>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">2.6.4</p>
            <DownloadIcon />
            <p className="text-loadOrange">NEW</p>
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">2.6.3</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">2.4.1</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">2.3.1</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">2.0.8</p>
            <DownloadIcon />
          </Link>
          <Link href="Sample.pdf" target="_blank" className="flex gap-2">
            <p className="font-medium text-black/60">2.0.3</p>
            <DownloadIcon />
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default Guides
