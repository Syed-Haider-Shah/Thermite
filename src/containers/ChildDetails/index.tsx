import { LineItem } from '@/components'
import { IChildTicket } from '@/types/supabaseTables'

const ChildDetails = ({ child }: { child: IChildTicket }) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-10 rounded-5 p-5 text-black/90">
      {Object.keys(child).map((key) => (
        <LineItem
          key={key}
          title={key.split('_').join(' ')}
          item={child[key]}
          isDate={key === 'created_at' || key === 'close_date'}
        />
      ))}
    </div>
  )
}

export default ChildDetails
