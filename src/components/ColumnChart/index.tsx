import { ArrowDown, ArrowRight, PeopleV2 } from '../Icons'
import ChartLine from './ChartLine'

const ColumnChart = () => {
  return (
    <section className="col-span-2 h-full w-full border border-black/10">
      <div className="flex h-[25%] w-full items-center gap-5 bg-white pl-8">
        <div className="flex h-[60%] w-[9%] items-center justify-center rounded bg-gray/20">
          <PeopleV2 />
        </div>
        <div>
          <div className="text-2xl font-bold">3.4K</div>
          <div className="text-sm text-gray">All time tickets closed</div>
        </div>
      </div>
      <div className="mx-4 flex h-[55%] justify-center gap-6 border-y-2 border-vLightIndigo bg-white">
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
      <div className="flex h-[20%] w-full items-center justify-around ">
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
