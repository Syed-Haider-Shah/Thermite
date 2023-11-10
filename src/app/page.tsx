import { Tabs } from '@/components'
import { Withdraws } from '@/containers'

const TABS = [
  {
    id: 'withdraws',
    value: 'Withdraws'
  },
  {
    id: 'billboard',
    value: 'Billboard'
  }
]

const Home = () => {
  return (
    <Tabs tabs={TABS}>
      <Withdraws />
    </Tabs>
  )
}

export default Home
