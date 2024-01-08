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
  close_date: string | null
  created_at: string
  created_date: string
  customer_impact: boolean
  customer_inquiry: boolean
  description: string
  fault: string
  id: number
  parent_id: number
  problem: string | null
  serial_number: string
  status: string
  upgrade: boolean
  [key: string]: string | string[] | boolean | number | null
}

export const INITIAL_CHILD_DATA = {
  close_date: null,
  created_at: '',
  created_date: '',
  customer_impact: false,
  customer_inquiry: false,
  description: '',
  fault: '',
  id: 0,
  parent_id: 0,
  problem: null,
  serial_number: '',
  status: '',
  upgrade: false
}

export interface IParentDetails {
  id: number
  created_at: string
  child_count: string
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
  child_count: '',
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
  country: string | null
  created_at: string
  image_url?: string
  id: string
  name: string | null
  number_of_assigned_tickets: number
  number_of_closed_tickets: number
  role: string | null
  email?: string
  [key: string]: string | number | null | undefined
}

export const INITIAL_EMPLOYEE_DATA: IEmployee = {
  created_at: '',
  id: '',
  name: null,
  number_of_assigned_tickets: 0,
  number_of_closed_tickets: 0,
  role: '',
  country: null
}
