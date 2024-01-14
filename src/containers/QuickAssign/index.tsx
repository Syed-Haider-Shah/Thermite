import { ArrowDown } from '@/components/Icons'

const QuickAssign = () => (
  <div className="relative col-span-1 flex h-full w-full flex-col items-center gap-3 rounded border border-black/10 bg-white shadow-lg">
    <div className="mt-7 grid grid-cols-2 place-items-center justify-items-center gap-1 rounded-full border border-black/10 p-3 pt-2">
      <div className="col-span-2 h-5 w-5 rounded-full bg-loadBlue/50"></div>
      <div className="h-5 w-5 rounded-full bg-loadBlue/50"></div>
      <div className="h-5 w-5 rounded-full bg-loadBlue/50"></div>
    </div>
    <div className="flex justify-center bg-white font-bold">EASY ASSIGN</div>
    <div className="absolute bottom-0 grid h-1/2 w-full grid-cols-2 gap-1 bg-loadBlue p-4">
      <div className="flex flex-col items-center gap-3 p-2">
        <div className=" font-bold text-white">Town</div>
        <button className="bg-re flex items-center justify-center gap-2 rounded pl-6 text-sm font-light text-white hover:font-normal">
          SELECT
          <ArrowDown />
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 p-2 font-light">
        <div className="font-bold text-white">Employee</div>
        <button className="bg-re flex items-center justify-center gap-2 rounded pl-6 text-sm font-light text-white hover:font-normal">
          SELECT
          <ArrowDown />
        </button>
      </div>
      <button className="col-span-2 flex w-full items-center justify-center rounded bg-white/10 p-2 text-sm font-medium text-white transition-shadow hover:font-normal hover:shadow-lg">
        Confirm Changes
      </button>
    </div>
  </div>
)

export default QuickAssign
