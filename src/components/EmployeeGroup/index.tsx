import Image from 'next/image'

const EmployeeGroup = () => {
  return (
    <div className="gap-6">
      <h1 className="text-2xl font-bold">Admins</h1>
      <ul className="w-full p-5 flex flex-col gap-6">
        <li className="relative flex justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-4">
            <Image
              src="/cover.png"
              alt="avatar"
              width={72}
              height={72}
              className="rounded-3xl object-fill w-18 h-18 overflow-hidden"
            />
            <div className="space-y-2 text-sm font-bold text-black/70">
              <h2>Name: Ali Aizaz</h2>
              <p>Email: aliaizaz@gmail.com</p>
            </div>
          </div>
          <button className="px-6 pt-2 pb-1.5 bg-black text-white font-semibold rounded-2xl">
            View
          </button>
        </li>
        <li className="relative flex justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-4">
            <Image
              src="/cover.png"
              alt="avatar"
              width={72}
              height={72}
              className="rounded-3xl object-fill w-18 h-18 overflow-hidden"
            />
            <div className="space-y-2 text-sm font-bold text-black/70">
              <h2>Name: Ali Aizaz</h2>
              <p>Email: aliaizaz@gmail.com</p>
            </div>
          </div>
          <button className="px-6 pt-2 pb-1.5 bg-black text-white font-semibold rounded-2xl">
            View
          </button>
        </li>
        <li className="relative flex justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-4">
            <Image
              src="/cover.png"
              alt="avatar"
              width={72}
              height={72}
              className="rounded-3xl object-fill w-18 h-18 overflow-hidden"
            />
            <div className="space-y-2 text-sm font-bold text-black/70">
              <h2>Name: Ali Aizaz</h2>
              <p>Email: aliaizaz@gmail.com</p>
            </div>
          </div>
          <button className="px-6 pt-2 pb-1.5 bg-black text-white font-semibold rounded-2xl">
            View
          </button>
        </li>
      </ul>
    </div>
  )
}

export default EmployeeGroup
