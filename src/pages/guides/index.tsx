import Link from 'next/link'

import { Card, FilterSelect, SearchBar, Tag } from '@/components'
import { Paths } from '@/constants'

const CATEGORYS = [
  'Generation F',
  'Generation E',
  'Generation H',
  'Visual Parts'
]

const OPTIONS = [
  { value: 'all', name: 'All' },
  { value: 'installation', name: 'Installation' },
  { value: 'production', name: 'Production' },
  { value: 'dispensing', name: 'Dispensing' },
  { value: 'ozonation', name: 'Ozonation' }
]

const Guides = () => {
  return (
    <Card
      title="Guides"
      id="guides"
      className="scrollbar-primary overflow-y-scroll"
    >
      <SearchBar placeholder="Search for Guides" />
      <div className="flex items-end justify-between">
        <div title="generations" className="flex flex-col gap-2">
          <h2 className="font-semibold leading-5 text-black/90 ">
            Generations:
          </h2>
          <div className="flex gap-2">
            {CATEGORYS.map((tag) => (
              <Tag title={tag} key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <FilterSelect options={OPTIONS} name="type" />
      </div>
      <h1 className="translate-y-1 font-semibold leading-5 text-black/90">
        Guides
      </h1>
      <div className="space-y-3">
        <Link
          href={`${Paths.GUIDE}/1`}
          className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5 transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="space-y-2 text-sm">
            <h1 className="font-semibold leading-4">
              Source GUI Installation Instruction
            </h1>
            <p className="font-medium text-black/60">NEW 07/29/2023</p>
          </div>
          <p>Installation Instruction for the source GUI</p>
        </Link>
        <Link
          href={`${Paths.GUIDE}/1`}
          className="flex justify-between space-x-10 rounded-5 bg-lightGray p-5 transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="space-y-2 text-sm">
            <h1 className="font-semibold leading-4">
              Source GUI Installation Instruction
            </h1>
            <p className="font-medium text-black/60">NEW 07/29/2023</p>
          </div>
          <p>Installation Instruction for the source GUI</p>
        </Link>
      </div>
    </Card>
  )
}

export default Guides
