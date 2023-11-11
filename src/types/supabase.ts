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
          Address: string
          Coordinates: string | null
          'Customer ID': number
          'Installation Date': string | null
          'Number of Panels': number
          Region: string
          'Serial Number': string
        }
        Insert: {
          Address: string
          Coordinates?: string | null
          'Customer ID'?: number
          'Installation Date'?: string | null
          'Number of Panels': number
          Region: string
          'Serial Number': string
        }
        Update: {
          Address?: string
          Coordinates?: string | null
          'Customer ID'?: number
          'Installation Date'?: string | null
          'Number of Panels'?: number
          Region?: string
          'Serial Number'?: string
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
