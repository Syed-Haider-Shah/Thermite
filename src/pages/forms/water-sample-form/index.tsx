import { ComboBox, RadioButton } from '@/components'

const WaterForm = () => {
  return (
    <div className=" mx-20 h-screen w-form bg-white shadow-lg">
      <div className="m-10 ml-40 mt-24 text-xl font-bold text-darkIndigo">
        Water Sample Form
      </div>
      <div className="mx-auto grid h-20 w-4/5 grid-cols-2 place-items-center gap-7">
        <ComboBox items={[]} />
        <ComboBox items={[]} />
        <ComboBox items={[]} />
        <div className="flex w-full flex-col justify-center pl-10">
          <div className="flex text-sm">
            Where did you collect the sample from?
          </div>
          <div className="flex gap-5 text-xs">
            <RadioButton name="HUB" />
            <RadioButton name="SPOKE" />
            <RadioButton name="BOTH" />
          </div>
        </div>

        <ComboBox items={[]} />
        <ComboBox items={[]} />

        <ComboBox items={[]} />
        <ComboBox items={[]} />
        <div className="flex w-full translate-x-8 flex-col gap-2 ">
          <div className="text-md w-fit bg-white px-1 font-bold">
            Standard Water Test Results Image (No UV Black Light)
          </div>
          <div className="flex items-center gap-5">
            <button className="rounded bg-loadBlue p-2 text-sm text-white">
              Upload Water Sample
            </button>
            <div className="text-gray">No File Chosen</div>
          </div>
        </div>
        <ComboBox items={[]} />
        <button className="text-md col-span-2 w-1/2 rounded bg-loadBlue p-2 px-56 font-bold text-white">
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default WaterForm
