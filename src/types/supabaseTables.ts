export interface ICustomer {
  address: string
  id: number
  coordinates: string | null
  country: string | null
  created_at: string
  installation_date: string | null
  number_of_panels: number
  region: string
  serial_number: string
  warranty: boolean | null
  [key: string]: string | string[] | boolean | number | null
}

export type IRow = {
  [key: string]: string | string[] | boolean | number | null
}

export interface IParentTicket {
  child_count: string
  close_date: string | null
  created_at: string
  customer_id: number | null
  employee: number | null
  id: number
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

export const INITAIL_PARENT_DETAILS: IParentDetails = {
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
