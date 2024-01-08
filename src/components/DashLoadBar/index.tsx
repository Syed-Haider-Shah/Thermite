const DashLoadBar = ({
  townName,
  color,
  progress
}: {
  townName: string
  color: string
  progress: string
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-sm">{townName}</div>
        <div className="flex items-center">
          <div className="flex w-full bg-loadGray">
            <div className={`h-1 w-[80%] ${color}`}></div>
          </div>
          <div className="px-2 text-xs text-gray">{progress}%</div>
        </div>
      </div>
    </>
  )
}

export default DashLoadBar
