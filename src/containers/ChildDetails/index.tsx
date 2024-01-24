import { IChildTicket } from '@/types/supabaseTables'

const ChildDetails = ({ child }: { child: IChildTicket }) => {
  return (
    <div className="mt-5 flex flex-wrap gap-7 gap-x-10 rounded-5 border border-black/5 bg-darkIndigo p-5 text-white">
      <h1 className="h-min w-full text-lg font-semibold underline underline-offset-4">
        DETAILS
      </h1>
      {Object.keys(child).map((key) => (
        <div key={key} className="flex h-max items-center gap-2">
          <h2 className="text-base font-semibold capitalize leading-4">
            {key.split('_').join(' ')}:
          </h2>
          <p className="line-clamp-2 max-w-sm text-sm font-normal text-white/60">{`${child[key]}`}</p>
        </div>
      ))}
    </div>
  )
}

export default ChildDetails
