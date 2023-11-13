import { Button, Card } from '@/components'

const TicketDetails = () => {
  return (
    <Card title="details" id="details">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-semibold leading-6">Details</h1>
        <Button active>Edit</Button>
      </div>
      <div className="flex gap-8">
        <div>
          <h2 className="text-sm font-semibold leading-4">Name</h2>
          <p className="mt-2 line-clamp-2 max-w-sm font-normal text-black/80">
            Will Twitter suffer another major
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold leading-4">Description</h2>
          <p className="mt-2 line-clamp-2 max-w-md break-words font-normal text-black/80">
            ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG
          </p>
        </div>
      </div>
      <div className="flex gap-8">
        <div>
          <h2 className="mb-2 text-sm font-semibold leading-4">Location</h2>
          <p className="mt-2 line-clamp-2 max-w-md break-words font-normal text-black/80">
            ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold leading-4">Child Count</h2>
          <p className="mt-2 text-sm font-normal text-black/80">700</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold leading-4">Date Created</h2>
          <p className="mt-2 text-sm font-normal text-black/80">{Date.now()}</p>
        </div>
      </div>
    </Card>
  )
}

export default TicketDetails
