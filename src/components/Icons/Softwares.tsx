import { cn } from '@/utils/cn'

import { ISvgIcon } from './model'
const Softwares = ({ className }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    className={cn(
      'transition-colors duration-300 group-hover:invert group-[.selected]:invert',
      className
    )}
  >
    <path d="M19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15Z" />
    <path d="M16.649,13.072l-2.882,2.831c-.187,.187-.473,.448-.774,.715-.148,.131-.316,.224-.493,.286V6.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v10.404c-.177-.063-.345-.155-.493-.286-.301-.266-.587-.527-.777-.717l-2.879-2.828c-.198-.194-.514-.191-.708,.006-.193,.197-.19,.514,.006,.707l2.876,2.825c.198,.198,.5,.475,.818,.756,.472,.418,1.064,.628,1.656,.628s1.184-.209,1.656-.627c.318-.282,.621-.559,.815-.753l2.879-2.828c.197-.193,.2-.51,.006-.707-.194-.197-.51-.2-.708-.006Z" />
  </svg>
)

export default Softwares
