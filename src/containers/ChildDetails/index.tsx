import { IChildTicket } from '@/types/supabaseTables'

const ChildDetails = ({ child }: { child: IChildTicket }) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-4 gap-x-10 rounded-5 border border-black/5 bg-lightGray p-5">
      <h1 className="col-span-3 h-min w-full text-lg font-semibold">Details</h1>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">ID:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {child.id}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Created At:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {new Date(child.created_at).toDateString()}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Assigned Employee:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {child.employee || '----'}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Customer Impact:</h2>
        <p className="line-clamp-2 max-w-sm font-normal capitalize text-black/80">
          {`${child.customer_impact}`}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Customer Inquiry:</h2>
        <p className="line-clamp-2 max-w-sm font-normal capitalize text-black/80">
          {`${child.customer_inquiry}`}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Upgrade:</h2>
        <p className="line-clamp-2 max-w-sm font-normal capitalize text-black/80">
          {`${child.upgrade}`}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Fault:</h2>
        <p className="line-clamp-2 max-w-sm font-normal capitalize text-black/80">
          {child.fault}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Serial Number:</h2>
        <p className="line-clamp-2 max-w-sm font-normal uppercase text-black/80">
          {child.serial_number}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Problem:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {child.problem}
        </p>
      </div>
      <div className="flex h-max items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Parent ID:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {child.parent_id}
        </p>
      </div>
      <div className="flex h-max w-full items-center gap-2">
        <h2 className="text-sm font-semibold leading-4">Description:</h2>
        <p className="line-clamp-2 max-w-sm font-normal text-black/80">
          {child.description}
        </p>
      </div>
    </div>
  )
}

export default ChildDetails
