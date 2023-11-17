import { cn } from '@/utils/cn'

import { ISvgIcon } from './model'

const Grid = ({ className }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    className={cn(
      'transition-colors duration-300 group-hover:invert group-[.selected]:invert',
      className
    )}
  >
    <path
      d="M0.5625 2.90625C0.5625 2.28465 0.80943 1.68851 1.24897 1.24897C1.68851 0.80943 2.28465 0.5625 2.90625 0.5625H7.59375C8.21535 0.5625 8.81149 0.80943 9.25103 1.24897C9.69057 1.68851 9.9375 2.28465 9.9375 2.90625V7.59375C9.9375 8.21535 9.69057 8.81149 9.25103 9.25103C8.81149 9.69057 8.21535 9.9375 7.59375 9.9375H2.90625C2.28465 9.9375 1.68851 9.69057 1.24897 9.25103C0.80943 8.81149 0.5625 8.21535 0.5625 7.59375V2.90625ZM13.0625 2.90625C13.0625 2.28465 13.3094 1.68851 13.749 1.24897C14.1885 0.80943 14.7846 0.5625 15.4062 0.5625H20.0938C20.7154 0.5625 21.3115 0.80943 21.751 1.24897C22.1906 1.68851 22.4375 2.28465 22.4375 2.90625V7.59375C22.4375 8.21535 22.1906 8.81149 21.751 9.25103C21.3115 9.69057 20.7154 9.9375 20.0938 9.9375H15.4062C14.7846 9.9375 14.1885 9.69057 13.749 9.25103C13.3094 8.81149 13.0625 8.21535 13.0625 7.59375V2.90625ZM0.5625 15.4062C0.5625 14.7846 0.80943 14.1885 1.24897 13.749C1.68851 13.3094 2.28465 13.0625 2.90625 13.0625H7.59375C8.21535 13.0625 8.81149 13.3094 9.25103 13.749C9.69057 14.1885 9.9375 14.7846 9.9375 15.4062V20.0938C9.9375 20.7154 9.69057 21.3115 9.25103 21.751C8.81149 22.1906 8.21535 22.4375 7.59375 22.4375H2.90625C2.28465 22.4375 1.68851 22.1906 1.24897 21.751C0.80943 21.3115 0.5625 20.7154 0.5625 20.0938V15.4062ZM13.0625 15.4062C13.0625 14.7846 13.3094 14.1885 13.749 13.749C14.1885 13.3094 14.7846 13.0625 15.4062 13.0625H20.0938C20.7154 13.0625 21.3115 13.3094 21.751 13.749C22.1906 14.1885 22.4375 14.7846 22.4375 15.4062V20.0938C22.4375 20.7154 22.1906 21.3115 21.751 21.751C21.3115 22.1906 20.7154 22.4375 20.0938 22.4375H15.4062C14.7846 22.4375 14.1885 22.1906 13.749 21.751C13.3094 21.3115 13.0625 20.7154 13.0625 20.0938V15.4062Z"
      fill="black"
    />
  </svg>
)

export default Grid
