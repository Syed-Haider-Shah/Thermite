const ColumnChartLines = ({
  title,
  value1,
  value2
}: {
  title: string
  value1: string
  value2: string
}) => {
  return (
    <>
      <div className="flex h-full flex-col justify-end gap-2 bg-white">
        <div className="flex items-end bg-white">
          <div
            className={` w-3 rounded-t-5 bg-loadBlue`}
            style={{ height: `${value1}` }}
          ></div>
          <div
            className={`bg-loadOrange w-3 rounded-t-5`}
            style={{ height: `${value2}` }}
          ></div>
        </div>
        <div className="bg-white text-sm">{title}</div>
      </div>
    </>
  )
}
export default ColumnChartLines
