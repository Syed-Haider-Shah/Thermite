export interface ICustomer {
  address: string
  coordinates: string | null
  id: number
  installation_date: string | null
  number_of_panels: number
  region: string
  serial_number: string
  [key: string]: string | number | null
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
  id: number
  parent_id: number
  problem: string | null
  status: string
  [key: string]: string | boolean | number | null
}
