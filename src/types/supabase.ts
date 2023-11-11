export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Customers: {
        Row: {
          address: string
          coordinates: string | null
          id: number
          installation_date: string | null
          number_of_panels: number
          region: string
          serial_number: string
        }
        Insert: {
          address: string
          coordinates?: string | null
          id?: number
          installation_date?: string | null
          number_of_panels: number
          region: string
          serial_number: string
        }
        Update: {
          address?: string
          coordinates?: string | null
          id?: number
          installation_date?: string | null
          number_of_panels?: number
          region?: string
          serial_number?: string
        }
        Relationships: []
      }
      'Parent Ticket': {
        Row: {
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
        }
        Insert: {
          Address: string
          'Assigned Employee'?: string | null
          'Child Ticket Count'?: number
          'Close Date'?: string | null
          Coordinates?: string | null
          Date?: string
          'Parent Ticket Number'?: number
          Problem?: string | null
          Region?: string | null
          'Serial Number': string[]
          Status: string
          'Under Warranty'?: boolean | null
        }
        Update: {
          Address?: string
          'Assigned Employee'?: string | null
          'Child Ticket Count'?: number
          'Close Date'?: string | null
          Coordinates?: string | null
          Date?: string
          'Parent Ticket Number'?: number
          Problem?: string | null
          Region?: string | null
          'Serial Number'?: string[]
          Status?: string
          'Under Warranty'?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
