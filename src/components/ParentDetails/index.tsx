const details = [
  'Parent ticket details',
  'serial numbers of panel',
  'Location',
  'Under Warranty',
  'Ticket Creation date',
  'Ticket status option'
]

const ParentDetails = () => (
  <section id="details" className="w-full">
    <ul className="grid grid-cols-3 h-full gap-y-20 content-start place-content-between py-6">
      {details.map((detail) => (
        <li key={detail}>
          <h1 className="text-darkGray text-xl font-semibold">{detail}</h1>
          <p className="text-gray font-normal">sample data</p>
        </li>
      ))}
    </ul>
  </section>
)

export default ParentDetails
