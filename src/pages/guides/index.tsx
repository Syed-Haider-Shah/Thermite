import GuidesCard from '@/components/GuidesCard'
import GuideSkeleton from '@/components/GuidesCard/GuideSkeleton'
//took videos from https://www.pexels.com/
const Guides = () => {
  return (
    <>
      <div className="">
        <div className="text-xl font-bold text-darkIndigo">
          Guides / Training
        </div>
        <div className="mb-2 text-sm text-gray">
          Familiarize yourself before you jump into action
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <GuidesCard
          guidevideo={'/video6.mp4'}
          title="Water Filter Replacement Guide"
        />
        <GuidesCard guidevideo={'/video4.mp4'} title="Firmware Update Guide" />
        <GuidesCard
          guidevideo={'/video5.mp4'}
          title="Panel Installation Guide"
        />
        <GuidesCard guidevideo={'/video7.mp4'} title="Site Audit Guide" />
        <GuidesCard
          guidevideo={'/video8.mp4'}
          title="Motor replacement Guide"
        />
        <GuidesCard
          guidevideo={'/video9.mp4'}
          title="Motor replacement Guide"
        />
        <GuideSkeleton />
      </div>
    </>
  )
}

export default Guides
