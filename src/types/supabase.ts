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
      Parent: {
        Row: {
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
        }
        Insert: {
          id?: number
          address: string
          region?: string | null
          created_at: string
          assigned_employee?: string | null
          child_count?: number
          close_date: string | null
          coordinates?: string | null
          serial_number: string[]
          status: string
          country: string | null
          under_warranty?: boolean | null
        }
        Update: {
          id?: number
          address: string
          region?: string | null
          created_at: string
          assigned_employee?: string | null
          child_count?: number
          close_date: string | null
          coordinates?: string | null
          serial_number: string[]
          status: string
          country: string | null
          under_warranty?: boolean | null
        }
        Relationships: []
      }
      Child: {
        Row: {
          id: number
          created_at: string
          address: string
          serial_number: string
          assigned_employee: string | null
          close_date: string | null
          problem: string | null
          status: string
          parent_ticket_id: number
        }
        Insert: {
          id: number
          created_at: string
          address: string
          serial_number: string
          assigned_employee: string | null
          close_date: string | null
          problem: string | null
          status: string
          parent_ticket_id: number
        }
        Update: {
          id: number
          created_at: string
          address: string
          serial_number: string
          assigned_employee: string | null
          close_date: string | null
          problem: string | null
          status: string
          parent_ticket_id: number
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
