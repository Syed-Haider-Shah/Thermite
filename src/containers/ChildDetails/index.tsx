import { IChildTicket } from '@/types/supabaseTables'

const ChildDetails = ({ child }: { child: IChildTicket }) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-10 rounded-5 border border-black/5 p-5 text-black/90">
      <h1 className="col-span-3 h-min w-full text-lg font-semibold underline underline-offset-4">
        DETAILS
      </h1>
      {Object.keys(child).map((key) => (
        <div
          key={key}
          className="space-y-2 border-b border-black/10 pb-1 last:border-b-0"
        >
          <h2 className="text-base font-semibold capitalize leading-4">
            {key.split('_').join(' ')}:
          </h2>
          <p className="whitespace-nowrap text-sm font-normal text-black/60">
            {key === 'created_at' || 'close_date'
              ? new Date(`${child[key]}`).toDateString()
              : `${child[key]}`}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ChildDetails
