import { FormLine } from '@/components'

const WaterForm = () => {
  return (
    <>
      <div className=" mx-20 h-screen w-form bg-white shadow-lg">
        <div className="m-10 ml-40 mt-24 text-xl font-bold text-darkIndigo">
          Water Sample Form
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-20 w-[80%]">
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className="box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Ticket Name
                </div>
                <FormLine id="ticket" placeholder="Select a Ticket" cusForm />
              </fieldset>
            </div>
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className=" box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Region
                </div>
                <FormLine id="region" placeholder="Select a Region" cusForm />
              </fieldset>
            </div>
          </div>
          <div className="flex h-20 w-[80%]">
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className=" box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Panel Generation
                </div>
                <FormLine
                  id="region"
                  placeholder="Select Panel Generation"
                  cusForm
                />
              </fieldset>
            </div>
            <div className="flex w-[50%] flex-col justify-center">
              <div className="ml-10 flex text-sm">
                Where did you collect the sample from?
              </div>
              <div className="ml-10 flex gap-5 text-xs">
                <div className="flex items-center gap-1">
                  <label
                    title="sample"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[0.25rem] border-loadGray focus-within:border-loadBlue"
                  >
                    <input
                      type="checkbox"
                      title="sample"
                      className="ring-cursor-pointer h-2 w-2 cursor-pointer appearance-none rounded-full bg-transparent accent-loadBlue ring-0 ring-loadBlue ring-offset-0 focus:bg-loadBlue focus:ring-2"
                    ></input>
                  </label>
                  <div className="text-[0.65rem]">HUB</div>
                </div>
                <div className="flex items-center gap-1">
                  <label
                    title="sample"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[0.25rem] border-loadGray focus-within:border-loadBlue"
                  >
                    <input
                      type="checkbox"
                      title="sample"
                      className="ring-cursor-pointer h-2 w-2 cursor-pointer appearance-none rounded-full bg-transparent accent-loadBlue ring-0 ring-loadBlue ring-offset-0 focus:bg-loadBlue focus:ring-2"
                    ></input>
                  </label>
                  <div className="text-[0.65rem]">SPOKE</div>
                </div>
                <div className="flex items-center gap-1">
                  <label
                    title="sample"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[0.25rem] border-loadGray focus-within:border-loadBlue"
                  >
                    <input
                      type="checkbox"
                      title="sample"
                      className="ring-cursor-pointer h-2 w-2 cursor-pointer appearance-none rounded-full bg-transparent accent-loadBlue ring-0 ring-loadBlue ring-offset-0 focus:bg-loadBlue focus:ring-2"
                    ></input>
                  </label>
                  <div className="text-[0.65rem]">BOTH</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-20 w-[80%]">
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className="box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Water Test Vial Expiration Date
                </div>
                <FormLine id="vial" placeholder="Select the Date" cusForm />
              </fieldset>
            </div>
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className=" box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Water Test Sample Date & Time
                </div>
                <FormLine
                  id="sampleDate"
                  placeholder="Select the Date"
                  cusForm
                />
              </fieldset>
            </div>
          </div>
          <div className="flex h-20 w-[80%]">
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className="box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Water Test Read Date & Time
                </div>
                <FormLine
                  id="sampleRead"
                  placeholder="Select the Date"
                  cusForm
                />
              </fieldset>
            </div>
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className=" box-border h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Water Test Sample Result
                </div>
                <FormLine id="result" placeholder="Select the Date" cusForm />
              </fieldset>
            </div>
          </div>
          <div className="mt-5 flex h-20 w-[80%]">
            <div className="flex w-[50%] translate-x-8 flex-col gap-2 ">
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
            <div className="flex w-[50%] items-center justify-center">
              <fieldset className="box-border h-[100%] w-[90%] rounded-lg border-[0.25rem] border-loadGray focus-within:border-loadBlue">
                <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Comments
                </div>
                <FormLine id="comments" placeholder="Any Comments" cusForm />
              </fieldset>
            </div>
          </div>
          <div className="mt-5 flex h-20 w-[80%] items-center justify-center ">
            <button className="text-md rounded bg-loadBlue p-2 px-56 font-bold text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WaterForm
