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
      Child: {
        Row: {
          close_date: string | null
          created_at: string
          id: number
          parent_id: number
          problem: string | null
          status: string
        }
        Insert: {
          close_date?: string | null
          created_at?: string
          id?: number
          parent_id: number
          problem?: string | null
          status?: string
        }
        Update: {
          close_date?: string | null
          created_at?: string
          id?: number
          parent_id?: number
          problem?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Child_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'Parent'
            referencedColumns: ['id']
          }
        ]
      }
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
      Employees: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      Parent: {
        Row: {
          child_count: string
          close_date: string | null
          created_at: string
          customer_id: number | null
          employee: number | null
          id: number
          status: string
        }
        Insert: {
          child_count?: string
          close_date?: string | null
          created_at?: string
          customer_id?: number | null
          employee?: number | null
          id?: number
          status?: string
        }
        Update: {
          child_count?: string
          close_date?: string | null
          created_at?: string
          customer_id?: number | null
          employee?: number | null
          id?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Parent_customer_id_fkey'
            columns: ['customer_id']
            isOneToOne: false
            referencedRelation: 'Customers'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'Parent_employee_fkey'
            columns: ['employee']
            isOneToOne: false
            referencedRelation: 'Employees'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_employee: {
        Args: {
          par_id: number
          emp: number
        }
        Returns: undefined
      }
      close_child_ticket: {
        Args: {
          c_id: number
        }
        Returns: undefined
      }
      close_parent_ticket: {
        Args: {
          par_id: number
        }
        Returns: undefined
      }
      create_child_ticket: {
        Args: {
          par_id: number
          prob: string
        }
        Returns: undefined
      }
      create_parent_ticket: {
        Args: {
          cus_id: number
        }
        Returns: undefined
      }
      delete_parent_row: {
        Args: {
          par_id: number
          stat: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
