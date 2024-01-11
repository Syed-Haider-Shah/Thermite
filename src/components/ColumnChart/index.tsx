const ColumnChart = () => {
  return (
    <>
      <section className="h-full w-full">
        <div className="flex h-[25%] w-full items-center gap-5 bg-white pl-5">
          <div className="flex h-[60%] w-[9%] items-center justify-center rounded bg-gray/20">
            <svg
              className="text-gray-500 dark:text-gray-400 h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 19"
            >
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold">3.4K</div>
            <div className="text-sm text-gray">All time tickets closed</div>
          </div>
        </div>
        <div className="mx-4 flex h-[55%] gap-5 border-y-2 border-vLightIndigo bg-white">
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Jan</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex items-end bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-10 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Feb</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Mar</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Apr</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">May</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Jun</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Jul</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Aug</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Sep</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Oct</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Nov</div>
          </div>
          <div className="flex h-full flex-col justify-end gap-2 bg-white">
            <div className="flex bg-white">
              <div className="h-20 w-3 rounded-t-5 bg-loadBlue"></div>
              <div className="bg-loadOrange h-20 w-3 rounded-t-5"></div>
            </div>
            <div className="bg-white text-sm">Dec</div>
          </div>
        </div>
        <div className="flex h-[20%] w-full items-center justify-around ">
          <div className="text-gray">2024 L</div>{' '}
          <div className="text-loadBlue">SEND REPORT L</div>
        </div>
      </section>
    </>
  )
}

export default ColumnChart
