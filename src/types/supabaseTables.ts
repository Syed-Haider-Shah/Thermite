export interface ICustomers {
  address: string
  coordinates: string | null
  id: number
  installation_date: string | null
  number_of_panels: number
  region: string
  serial_number: string
  [key: string]: string | number | null
}
