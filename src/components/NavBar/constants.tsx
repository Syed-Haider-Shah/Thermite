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

export const PageColors = [
  {
    link: '/',
    text: 'Dashboard',
    logoActive: <GridFill />,
    logoBlur: <GridOutlined />
  },
  {
    link: '/tickets',
    text: 'Tickets',
    logoActive: <TickersFill />,
    logoBlur: <TickersOutline />
  },
  {
    link: '/customers',
    text: 'Customers',
    logoActive: <CustomersFill />,
    logoBlur: <CustomersOutline />
  },
  {
    link: '/forms',
    text: 'Forms',
    logoActive: <FormsFill />,
    logoBlur: <FormsOutlined />
  },
  {
    link: '/guides',
    text: 'Guides',
    logoActive: <GuidesFill />,
    logoBlur: <GuidesOutline />
  },
  {
    link: '/software',
    text: 'Software',
    logoActive: <SoftwareFill />,
    logoBlur: <SoftwareOutline />
  }
]
