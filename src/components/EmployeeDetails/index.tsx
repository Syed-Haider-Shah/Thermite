import Image from 'next/image'

const EmployeeDetails = () => (
  <section className="px-10 flex flex-col gap-8">
    <h1 className="text-2xl font-bold">Employee Details</h1>
    <div className="flex items-center gap-4">
      <Image
        src="/cover.png"
        alt="avatar"
        width={96}
        height={96}
        className="rounded-full object-fill w-24 h-24 overflow-hidden"
      />
      <div className="space-y-2 text-sm font-bold text-black/70">
        <h2>Name: Ali Aizaz</h2>
        <p>Email: aliaizaz@gmail.com</p>
      </div>
    </div>
    <div className="text-darkGray">
      <h1 className="font-bold text-xl">Number of Tickets Assigned</h1>
      <p>Sample Data</p>
    </div>
    <div className="text-darkGray">
      <h1 className="font-bold text-xl">Number of Tickets Assigned</h1>
      <p>Sample Data</p>
    </div>
    <div className="text-darkGray">
      <h1 className="font-bold text-xl">Number of Tickets Assigned</h1>
      <p>Sample Data</p>
    </div>
    <div className="text-darkGray">
      <h1 className="font-bold text-xl">Number of Tickets Assigned</h1>
      <p>Sample Data</p>
    </div>
    <div className="text-darkGray">
      <h1 className="font-bold text-xl">Number of Tickets Assigned</h1>
      <p>Sample Data</p>
    </div>
  </section>
)

export default EmployeeDetails
