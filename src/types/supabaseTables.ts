export interface ICustomer {
  address: string
  coordinates: string | null
  country: string
  created_at: string
  id: number
  installation_date: string | null
  number_of_panels: number
  region: string
  serial_number: string
  town: string
  warranty: boolean | null
  [key: string]: string | string[] | boolean | number | null
}

export type IRow = {
  [key: string]: string | string[] | boolean | number | null | undefined
}

export interface IParentTicket {
  id: number
  created_at: string
  child_count: number
  close_date: string
  status: string
  employee: string
  customer_id: number
  address: string
  region: string
  serial_number: string
  coordinates: string
  installation_date: string
  number_of_panels: number
  country: string
  warranty: boolean
  [key: string]: string | string[] | boolean | number | null
}

export interface IChildTicket {
  id: number
  created_at: string
  status: string
  close_date: string
  parent_id: number
  customer_impact: boolean
  customer_inquiry: boolean
  upgrade: boolean
  indicated_failure: string
  fault: string
  outage_date: string
  source: string
  serial_number: string
  [key: string]: string | string[] | boolean | number | null
}

export const INITIAL_CHILD_DATA = {
  id: 0,
  created_at: '',
  status: '',
  close_date: '',
  parent_id: 0,
  customer_impact: false,
  customer_inquiry: false,
  upgrade: false,
  indicated_failure: '',
  fault: '',
  outage_date: '',
  source: '',
  serial_number: ''
}

export interface IParentDetails {
  id: number
  created_at: string
  child_count: number
  close_date: string
  status: string
  employee: string
  customer_id: number
  address: string
  region: string
  serial_number: string
  coordinates: string
  installation_date: string
  number_of_panels: number
  country: string
  warranty: boolean
  [key: string]: string | string[] | boolean | number | null
}

export const INITIAL_PARENT_DETAILS: IParentDetails = {
  id: 0,
  created_at: '',
  child_count: 0,
  close_date: '',
  status: '',
  employee: '',
  customer_id: 0,
  address: '',
  coordinates: '',
  country: '',
  installation_date: '',
  number_of_panels: 0,
  region: '',
  serial_number: '',
  warranty: false
}

export interface IEmployee {
  all_time_tickets_closed: number
  country: string | null
  created_at: string
  email: string
  fe_role: string
  id: string
  image_url: string
  name: string | null
  number_of_assigned_tickets: number
  number_of_closed_tickets: number
  role: string | null
  [key: string]: string | number | null | undefined
}

export const INITIAL_EMPLOYEE_DATA: IEmployee = {
  created_at: '',
  id: '',
  name: null,
  number_of_assigned_tickets: 0,
  number_of_closed_tickets: 0,
  role: '',
  country: null,
  all_time_tickets_closed: 0,
  email: '',
  fe_role: '',
  image_url: ''
}
