import { DownloadIcon, SupportIcon } from '../Icons'
const GuidesCard = ({
  title,
  guidevideo
}: {
  title: string
  guidevideo?: string
}) => {
  return (
    <>
      <div className="flex h-[25rem] w-96 flex-col border-[1px] border-gray/20 shadow-lg">
        <div className="flex h-[55%] w-full items-center justify-center ">
          <div className="max-h-[85%] w-[90%] overflow-hidden rounded-2.5 border-4 border-gray shadow-lg">
            <video autoPlay loop muted src={guidevideo}></video>
          </div>
        </div>
        <div className="m-4 flex flex-col gap-2 text-darkIndigo">
          <h1 className="text-lg font-bold">{title}</h1>
          <button className="flex gap-2">
            <p className="text-sm text-gray">Instruction Document</p>
            <div>
              <DownloadIcon />
            </div>
          </button>
          <button className="flex gap-2">
            <p className="text-sm text-gray">FAQ</p>
            <div>
              <DownloadIcon />
            </div>
          </button>
        </div>
        <div className="flex w-full justify-center">
          <button className="flex w-fit items-center justify-between gap-2 rounded-5 bg-darkIndigo p-2 px-4 text-white shadow-md">
            <p>Contact Support</p>
            <div>
              <SupportIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default GuidesCard
