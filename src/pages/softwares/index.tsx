import { Card } from '@/components'

const Guides = () => {
  return (
    <Card title="softwares" id="softwares">
      <h1 className="text-xl font-semibold leading-6">Softwares</h1>
      <div className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5">
        <div className="space-y-2 text-sm">
          <h1 className="font-semibold leading-4">
            Source GUI Installation Instruction
          </h1>
          <p className="font-medium text-black/60">NEW 07/29/2023</p>
        </div>
        <p>Installation Instruction for the source GUI</p>
      </div>
    </Card>
  )
}

export default Guides
