import { Doughnut } from 'react-chartjs-2'

import 'chart.js/auto'

import { cn } from '@/utils/cn'

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [60, 10, 30],
      backgroundColor: [
        'rgba(59, 130, 246,1)',
        'rgba(80, 200, 120,1)',
        'rgba(253, 186, 140, 1)'
      ],
      borderColor: [
        'rgba(59, 130, 246,1)',
        'rgba(80, 200, 120,1)',
        'rgba(253, 186, 140, 1)'
      ],
      borderWidth: 0
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
      <div className="p-3.5 text-sm text-black">Assigned Ticket Details</div>
      <div className="h-32">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex w-full flex-col p-6 text-sm">
        <div className="flex justify-between border-b-2 border-vLightIndigo p-2">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-5 bg-loadBlue">
              <div className="h-3/5 w-3/5 rounded-5 bg-white"></div>
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
              <div className="h-3/5 w-3/5 rounded-5 bg-white"></div>
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
                'bg-loadOrange'
              )}
            >
              <div className="h-3/5 w-3/5 rounded-5 bg-white"></div>
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
