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
  id: number
  address: string
  region: string | null
  created_at: string
  assigned_employee: string | null
  child_count: number
  close_date: string | null
  coordinates: string | null
  serial_number: string[]
  status: string
  country: string | null
  under_warranty: boolean | null
  [key: string]: string | string[] | boolean | number | null
}

export interface IChildTicket {
  id: number
  created_at: string
  address: string
  serial_number: string
  assigned_employee: string | null
  close_date: string | null
  problem: string | null
  status: string
  parent_ticket_id: number
  [key: string]: string | boolean | number | null
}
