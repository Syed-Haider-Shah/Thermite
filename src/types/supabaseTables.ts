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

export interface ITicket {
  Address: string
  'Assigned Employee': string | null
  'Child Ticket Count': number
  'Close Date': string | null
  Coordinates: string | null
  Date: string
  'Parent Ticket Number': number
  Problem: string | null
  Region: string | null
  'Serial Number': string[]
  Status: string
  'Under Warranty': boolean | null
  [key: string]: string | string[] | boolean | number | null
}
