import { cn } from '@/utils/cn'

import { ISvgIcon } from './model'

const Explore = ({ className }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={cn(
      'transition-colors duration-300 group-hover:invert group-[.selected]:invert',
      className
    )}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM9.50731 8.95027C9.25321 9.05191 9.05187 9.25325 8.95023 9.50735L6.1218 16.5784C5.97323 16.9498 6.06031 17.3741 6.34317 17.6569C6.62603 17.9398 7.05025 18.0269 7.42167 17.8783L14.4927 15.0499C14.7468 14.9482 14.9482 14.7469 15.0498 14.4928L17.8782 7.42171C18.0268 7.05029 17.9397 6.62607 17.6569 6.34321C17.374 6.06035 16.9498 5.97327 16.5784 6.12184L9.50731 8.95027ZM13.352 13.3521L8.84533 15.1548L10.648 10.6481L15.1547 8.84537L13.352 13.3521Z"
      fill="black"
    />
  </svg>
)

export default Explore
