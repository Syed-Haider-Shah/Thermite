import { DashLoadBar } from '@/components'

const TopTowns = () => (
  <div className="max-h-96 min-h-sm min-w-[650px]">
    <div className="p-12 pt-10 text-gray">TOP TOWNS WITH PENDING WORK</div>
    <div className="px-12">
      <DashLoadBar
        townName="WALGETT"
        color="bg-loadBlue"
        color2="bg-loadBlue/40"
        progress="90"
      />
      <DashLoadBar
        townName="LIGHTNING RIDGE"
        color="bg-loadGreen"
        color2="bg-loadGreen/40"
        progress="80"
      />
      <DashLoadBar
        townName="BOURKE"
        color="bg-loadOrange"
        color2="bg-loadOrange/40"
        progress="70"
      />
      <DashLoadBar
        townName="COBAR"
        color="bg-loadYellow"
        color2="bg-loadYellow/40"
        progress="50"
      />
      <DashLoadBar
        townName="BROKEN HILL"
        color="bg-cleanRed"
        color2="bg-cleanRed/40"
        progress="30"
      />
    </div>
  </div>
)

export default TopTowns
