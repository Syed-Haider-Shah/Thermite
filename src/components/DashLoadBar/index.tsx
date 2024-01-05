const DashLoadBar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-sm">WALGETT</div>
        <div className="flex items-center">
          <div className="flex w-full bg-loadGray">
            <div className="h-1 w-[80%] bg-loadGreen"></div>
          </div>
          <div className="px-2 text-xs text-gray">80%</div>
        </div>
      </div>
    </>
  )
}

export default DashLoadBar
