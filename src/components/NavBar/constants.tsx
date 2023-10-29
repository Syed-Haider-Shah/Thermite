import { Paths } from '@/constants'

import {
  CustomersFill,
  CustomersOutline,
  FormsFill,
  FormsOutlined,
  GridFill,
  GridOutlined,
  GuidesFill,
  GuidesOutline,
  SoftwareFill,
  SoftwareOutline,
  TickersFill,
  TickersOutline
} from '../Icons'

export const NAV_OPTIONS = [
  {
    link: Paths.HOME,
    text: 'Dashboard',
    logoActive: <GridFill />,
    logoBlur: <GridOutlined />
  },
  {
    link: Paths.TICKET,
    text: 'Tickets',
    logoActive: <TickersFill />,
    logoBlur: <TickersOutline />
  },
  {
    link: Paths.CUSTOMER,
    text: 'Customers',
    logoActive: <CustomersFill />,
    logoBlur: <CustomersOutline />
  },
  {
    link: Paths.FORM,
    text: 'Forms',
    logoActive: <FormsFill />,
    logoBlur: <FormsOutlined />
  },
  {
    link: Paths.GUIDE,
    text: 'Guides',
    logoActive: <GuidesFill />,
    logoBlur: <GuidesOutline />
  },
  {
    link: Paths.SOFTWARE,
    text: 'Software',
    logoActive: <SoftwareFill />,
    logoBlur: <SoftwareOutline />
  }
]
