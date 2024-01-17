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
        <div className="flex items-center gap-2 text-xs text-gray">
          <div className="flex w-full bg-loadGray">
            <div
              className={`h-1 animate-fade ${color}`}
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
