import { Doughnut } from 'react-chartjs-2'

import 'chart.js/auto'

import { cn } from '@/utils/cn'

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}

const TicketChart = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-between bg-white shadow-xl">
      <div className="p-7 text-sm text-black">Assigned Ticket Details</div>
      <div className="h-52">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex w-full flex-col p-6 text-sm">
        <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-5 bg-indigo">
              <div className="h-[60%] w-[60%] rounded-5 bg-white"></div>
            </div>
            <div className="font-bold">Open Tickets</div>
          </div>
          <div>
            <div className="text-gray">60%</div>
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'bg- flex h-4 w-4 items-center justify-center rounded-full',
                'bg-loadGreen'
              )}
            >
              <div className="h-[60%] w-[60%] rounded-5 bg-white"></div>
            </div>
            <div className="font-bold">Water Sample Required</div>
          </div>
          <div>
            <div className="text-gray">10%</div>
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-5',
                'bg-loadYellow'
              )}
            >
              <div className="h-[60%] w-[60%] rounded-5 bg-white"></div>
            </div>
            <div className="font-bold">Closed Tickets</div>
          </div>
          <div>
            <div className="text-gray">30%</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TicketChart
