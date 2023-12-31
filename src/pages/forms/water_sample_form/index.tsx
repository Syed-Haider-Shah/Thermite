const WaterForm = () => {
  return (
    <>
      <div className=" w-form mx-20 h-screen bg-white shadow-lg">
        <div className="m-10 ml-40 text-xl font-bold text-darkIndigo">
          Water Sample Form
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-20 w-[80%]">
            <div className="flex w-[50%] items-center justify-center">
              <div className="absolute mb-8 mr-80 w-fit bg-white p-1 text-sm">
                Address
              </div>
              <div className="h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray"></div>
            </div>
            <div className="flex w-[50%] items-center justify-center">
              <div className="absolute mb-8 mr-80 w-fit bg-white p-1 text-sm">
                Region
              </div>
              <div className="h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray"></div>
            </div>
          </div>
          <div className="flex h-20 w-[80%]">
            <div className="flex w-[50%] items-center justify-center">
              <div className="absolute mb-8 mr-80 w-fit bg-white p-1 text-sm">
                Panel Generation
              </div>
              <div className="h-[50%] w-[90%] rounded-lg border-[0.25rem] border-loadGray"></div>
            </div>
            <div className="flex w-[50%] flex-col bg-red">
              <div className="flex items-center justify-center text-sm">
                Where did you collect the sample from?
              </div>
              <div className="flex gap-5 text-xs">
                <div className="flex">
                  <div className="h-2"></div>
                  <div>HUB</div>
                </div>
                <div className="flex">
                  <div></div>
                  <div>SPOKE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WaterForm
