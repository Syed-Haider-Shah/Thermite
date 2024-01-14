const ChartLine = ({
  title,
  value1,
  value2
}: {
  title: string
  value1: string
  value2: string
}) => {
  return (
    <div className="flex h-full flex-col justify-end gap-2 bg-white">
      <div className="flex items-end overflow-hidden bg-white">
        <div
          className={` w-3 animate-slide-up rounded-t-5 bg-loadBlue`}
          style={{ height: `${value1}` }}
        ></div>
        <div
          className={`w-3 animate-slide-up rounded-t-5 bg-loadOrange`}
          style={{ height: `${value2}` }}
        ></div>
      </div>
      <div className="bg-white text-sm">{title}</div>
    </div>
  )
}
export default ChartLine
