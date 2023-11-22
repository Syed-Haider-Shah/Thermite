export interface ICustomer {
  address: string
  c_id: number
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
