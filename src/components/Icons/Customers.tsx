import { cn } from '@/utils/cn'

import { ISvgIcon } from './model'
const Customers = ({ className }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={cn(
      'transition-colors duration-300 group-hover:invert group-[.selected]:invert',
      className
    )}
  >
    <path d="M13.676,3.946c1.039-.979,2.668-1.217,3.94-.579l3.266,1.633h3.118v-1h-2.882l-3.055-1.527c-1.637-.82-3.733-.516-5.074,.746l-.951,.902-1.045-.953c-.827-.752-1.898-1.167-3.054-1.167-.693,0-1.386,.163-2.003,.473l-3.055,1.527H0v1H3.118l3.266-1.633c1.204-.604,2.869-.431,3.936,.539l.992,.904-3.519,3.336c-.901,.9-1.051,2.316-.347,3.293,.435,.604,1.17,1.051,2.039,1.051,.66,0,1.295-.261,1.76-.726l1.804-1.738,7.208,5.406-8.257,6.199L3.167,15H0v1H2.833l9.167,6.882,9.167-6.882h2.833v-1h-2.653l-7.568-5.676,2.107-2.029-.693-.721-4.648,4.477c-.312,.312-.747,.465-1.183,.435-.446-.036-.838-.26-1.104-.63-.42-.584-.316-1.444,.232-1.992L13.676,3.946Z" />
  </svg>
)

export default Customers