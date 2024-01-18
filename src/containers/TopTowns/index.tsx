import { DashLoadBar } from '@/components'

const TopTowns = () => (
  <div className="max-h-96 min-h-sm min-w-[650px]">
    <div className="p-12 pt-10 text-gray">TOP TOWNS WITH PENDING WORK</div>
    <div className="px-12">
      <DashLoadBar townName="WALGETT" color="bg-loadBlue" progress="90" />
      <DashLoadBar
        townName="LIGHTNING RIDGE"
        color="bg-loadGreen"
        progress="80"
      />
      <DashLoadBar townName="BOURKE" color="bg-loadYellow" progress="70" />
      <DashLoadBar townName="COBAR" color="bg-loadOrange" progress="50" />
      <DashLoadBar townName="BROKEN HILL" color="bg-red/60" progress="30" />
    </div>
  </div>
)

export default TopTowns
