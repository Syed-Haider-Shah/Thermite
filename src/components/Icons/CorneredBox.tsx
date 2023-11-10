import { ISvgIcon } from './model'

const CorneredBox = ({ className }: ISvgIcon) => (
  <svg
    className={className}
    viewBox="0 0 71 71"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.75 2H4C2.89543 2 2 2.89543 2 4V18.75M52.25 2H67C68.1046 2 69 2.89543 69 4V18.75M2 52.25V67C2 68.1046 2.89543 69 4 69H18.75M52.25 69H67C68.1046 69 69 68.1046 69 67V52.25"
      stroke="#2D5BFF"
      strokeWidth="3"
    />
  </svg>
)

export default CorneredBox
