import { Button, FilterSelect, SearchBar, UnionIcon } from '@/components'

const test = () => {
  const OPTIONS = [
    { value: 'team', name: 'All Teams' },
    { value: 'australia', name: 'Australia' }
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-20 w-full items-center justify-between rounded-2.5 bg-white px-4">
        <div className="flex justify-between">
          <SearchBar placeholder="Search for Employees" />
        </div>
        <div className="flex gap-x-2">
          <FilterSelect options={OPTIONS} name="category" />
          <Button className="group rounded-lg border border-black/5 bg-white px-4 font-medium text-black/60">
            <UnionIcon />
            New Employee
          </Button>
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className="bg-vlightIndigo flex justify-between font-bold text-white">
          <div className="flex h-10 w-60 items-center justify-center bg-darkIndigo">
            Employee Name
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-darkIndigo">
            No of Assigned Tickets
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-darkIndigo">
            No of Closed Tickets (Monthly)
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-darkIndigo">
            Team
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-darkIndigo">
            Role
          </div>
        </div>
        <div className="bg-vlightIndigo flex justify-between">
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Haider Shah
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            10
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            5
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Australia
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Field Executive
          </div>
        </div>
        <div className="bg-vlightIndigo flex justify-between">
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Ali Aizaz
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            12
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            0
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Australia
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Field Executive
          </div>
        </div>
        <div className="bg-vlightIndigo flex justify-between">
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Ed Wharton
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            0
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            3
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Australia
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Field Executive
          </div>
        </div>
        <div className="bg-vlightIndigo flex justify-between">
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Jason Mammo
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            23
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            13
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Australia
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Field Technician
          </div>
        </div>
        <div className="bg-vlightIndigo flex justify-between">
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Dylan Farr
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            14
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            2
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Australia
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Field Technician
          </div>
        </div>
        <div className="bg-vlightIndigo flex justify-between">
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Nova Munck
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            12
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            0
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Australia
          </div>
          <div className="flex h-10 w-60 items-center justify-center bg-white">
            Field Technician
          </div>
        </div>
      </div>
    </div>
  )
}

export default test
