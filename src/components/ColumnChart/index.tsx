import ColumnChartLines from '../ColumnChartLines'

const ColumnChart = () => {
  return (
    <>
      <section className="h-full w-full">
        <div className="flex h-[25%] w-full items-center gap-5 bg-white pl-8">
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
        <div className="mx-4 flex h-[55%] justify-center gap-6 border-y-2 border-vLightIndigo bg-white">
          <ColumnChartLines title="Jan" value1="5rem" value2="5rem" />
          <ColumnChartLines title="Feb" value1="7.5rem" value2="5rem" />
          <ColumnChartLines title="Mar" value1="5rem" value2="2.5rem" />
          <ColumnChartLines title="Apr" value1="2.5rem" value2="5rem" />
          <ColumnChartLines title="May" value1="7rem" value2="6.75rem" />
          <ColumnChartLines title="Jun" value1="5rem" value2="3.75rem" />
          <ColumnChartLines title="Jul" value1="5rem" value2="5rem" />
          <ColumnChartLines title="Aug" value1="2.5rem" value2="2.5rem" />
          <ColumnChartLines title="Sep" value1="7.5rem" value2="7.5rem" />
          <ColumnChartLines title="Oct" value1="7.5rem" value2="5rem" />
          <ColumnChartLines title="Nov" value1="8.25rem" value2="7.5rem" />
          <ColumnChartLines title="Dec" value1="7.5rem" value2="5rem" />
        </div>
        <div className="flex h-[20%] w-full items-center justify-around ">
          <button className="flex text-gray hover:text-darkIndigo">
            <div>2024</div>
            <svg
              className="m-2.5 ms-1.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <button className="flex items-center justify-center rounded p-2 px-4 font-bold text-loadBlue transition-all hover:bg-gray/20">
            <div>SEND REPORT</div>
            <svg
              className="ms-1.5 h-2.5 w-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default ColumnChart
