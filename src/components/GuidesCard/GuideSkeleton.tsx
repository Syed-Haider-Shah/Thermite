import Skeleton from 'react-loading-skeleton'

const GuideSkeleton = () => (
  <div className="flex h-[25rem] w-96 flex-col border-[1px] border-gray/20 shadow-lg">
    <div className="flex h-[55%] w-full items-center justify-center ">
      <Skeleton width={350} height={180} />
    </div>
    <div className="m-4 flex flex-col gap-2 text-darkIndigo">
      <Skeleton />
      <Skeleton width={50} />
      <Skeleton width={50} />
    </div>
    <div className="flex w-full justify-center">
      <Skeleton width={200} height={30} />
    </div>
  </div>
)

export default GuideSkeleton
