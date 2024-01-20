const DashLoadBar = ({
  townName,
  color,
  color2,
  progress
}: {
  townName: string
  color: string
  color2: string
  progress: string
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-sm">{townName}</div>
        <div className="flex items-center gap-2 text-xs text-gray">
          <div className={`flex w-full ${color2}`}>
            <div
              className={`h-[0.3rem] animate-fade ${color}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress}%
        </div>
      </div>
    </>
  )
}

export default DashLoadBar
