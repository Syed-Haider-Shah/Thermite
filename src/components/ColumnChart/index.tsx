import { ArrowDown, ArrowRight, PeopleV2 } from '../Icons'
import ChartLine from './ChartLine'

const ColumnChart = () => {
  return (
    <section className="max-h-96 min-w-[650px] overflow-hidden rounded border border-black/10 p-4 shadow-lg">
      <div className="flex h-1/4 w-full items-center gap-5 bg-white pb-3 pl-8">
        <div className="px-3items-center flex h-3/5 justify-center rounded bg-gray/20 p-2">
          <PeopleV2 />
        </div>
        <div>
          <div className="text-2xl font-bold">3.4K</div>
          <div className="text-sm text-gray">All time tickets closed</div>
        </div>
      </div>
      <div className="flex h-[55%] min-w-full items-end justify-center gap-6 border-y-2 border-vLightIndigo bg-white p-4 px-6">
        <ChartLine title="Jan" value1="5rem" value2="5rem" />
        <ChartLine title="Feb" value1="7.5rem" value2="5rem" />
        <ChartLine title="Mar" value1="5rem" value2="2.5rem" />
        <ChartLine title="Apr" value1="2.5rem" value2="5rem" />
        <ChartLine title="May" value1="7rem" value2="6.75rem" />
        <ChartLine title="Jun" value1="5rem" value2="3.75rem" />
        <ChartLine title="Jul" value1="5rem" value2="5rem" />
        <ChartLine title="Aug" value1="2.5rem" value2="2.5rem" />
        <ChartLine title="Sep" value1="7.5rem" value2="7.5rem" />
        <ChartLine title="Oct" value1="7.5rem" value2="5rem" />
        <ChartLine title="Nov" value1="8.25rem" value2="7.5rem" />
        <ChartLine title="Dec" value1="7.5rem" value2="5rem" />
      </div>
      <div className="flex h-1/5 w-full items-center justify-around pt-3 ">
        <button className="flex text-gray hover:text-darkIndigo">
          <div>2024</div>
          <ArrowDown />
        </button>

        <button className="flex items-center justify-center rounded p-2 px-4 font-bold text-loadBlue transition-all hover:bg-gray/20">
          <div>SEND REPORT</div>
          <ArrowRight />
        </button>
      </div>
    </section>
  )
}

export default ColumnChart
