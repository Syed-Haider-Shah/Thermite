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
        }
        Insert: {
          close_date?: string | null
          created_at?: string
          created_date?: string
          customer_impact?: boolean
          customer_inquiry?: boolean
          description?: string
          fault?: string
          id?: number
          parent_id: number
          problem?: string | null
          serial_number?: string
          status?: string
          upgrade?: boolean
        }
        Update: {
          close_date?: string | null
          created_at?: string
          created_date?: string
          customer_impact?: boolean
          customer_inquiry?: boolean
          description?: string
          fault?: string
          id?: number
          parent_id?: number
          problem?: string | null
          serial_number?: string
          status?: string
          upgrade?: boolean
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
          c_id: number
          coordinates: string | null
          country: string | null
          created_at: string
          installation_date: string | null
          number_of_panels: number
          region: string
          serial_number: string
          warranty: boolean | null
        }
        Insert: {
          address: string
          c_id?: number
          coordinates?: string | null
          country?: string | null
          created_at?: string
          installation_date?: string | null
          number_of_panels: number
          region: string
          serial_number: string
          warranty?: boolean | null
        }
        Update: {
          address?: string
          c_id?: number
          coordinates?: string | null
          country?: string | null
          created_at?: string
          installation_date?: string | null
          number_of_panels?: number
          region?: string
          serial_number?: string
          warranty?: boolean | null
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
            referencedColumns: ['c_id']
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
      count_children: {
        Args: {
          par_id: number
        }
        Returns: number
      }
      create_child_ticket: {
        Args: {
          parentid: number
          problem: string
          fault: string
          serial: string
          customerimpact: boolean
          customemrinquiry: boolean
          upgrade: boolean
          datecreated: string
          description: string
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
      show_parent_details: {
        Args: {
          par_id: number
        }
        Returns: {
          p_id: number
          created_at: string
          child_count: string
          close_date: string
          status: string
          employee: string
          c_id: number
          address: string
          region: string
          serial_number: string
          coordinates: string
          installation_date: string
          number_of_panels: number
          country: string
          warranty: boolean
        }[]
      }
      show_parent_ticket: {
        Args: {
          par_id: number
        }
        Returns: Record<string, unknown>
      }
      update_child_count: {
        Args: {
          par_id: number
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
