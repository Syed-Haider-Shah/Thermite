const ChildDetails = () => {
  return (
    <div className="mt-5 flex flex-wrap gap-4 gap-x-10 rounded-5 border border-black/5 bg-lightGray p-5">
      <h1 className="h-min w-full text-lg font-semibold">Details</h1>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">ID:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">12</p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Created At:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {new Date().toDateString()}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Assigned Employee:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          Haider Shah
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Customer Impact:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">True</p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Customer Inquiry:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">True</p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Upgrade:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">True</p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Fault:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          Air Filter
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Serial Number:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          H-1000
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Problem:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          Gas Pipe
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Parent ID:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">12</p>
      </div>
      <div className="flex h-max w-full items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Description:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          Gas Pipe
        </p>
      </div>
    </div>
  )
}

export default ChildDetails
