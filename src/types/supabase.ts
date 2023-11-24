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
          coordinates: string | null
          country: string | null
          created_at: string
          id: number
          installation_date: string | null
          number_of_panels: number
          region: string
          serial_number: string
          warranty: boolean | null
        }
        Insert: {
          address: string
          coordinates?: string | null
          country?: string | null
          created_at?: string
          id?: number
          installation_date?: string | null
          number_of_panels: number
          region: string
          serial_number: string
          warranty?: boolean | null
        }
        Update: {
          address?: string
          coordinates?: string | null
          country?: string | null
          created_at?: string
          id?: number
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
          id: string
          name: string | null
          number_of_assigned_tickets: number
          number_of_closed_tickets: number
          role: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string | null
          number_of_assigned_tickets?: number
          number_of_closed_tickets?: number
          role?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          number_of_assigned_tickets?: number
          number_of_closed_tickets?: number
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Employees_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      Parent: {
        Row: {
          child_count: string
          close_date: string | null
          created_at: string
          customer_id: number | null
          employee: string | null
          id: number
          status: string
        }
        Insert: {
          child_count?: string
          close_date?: string | null
          created_at?: string
          customer_id?: number | null
          employee?: string | null
          id?: number
          status?: string
        }
        Update: {
          child_count?: string
          close_date?: string | null
          created_at?: string
          customer_id?: number | null
          employee?: string | null
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
      assign_employee: {
        Args: {
          parent_id: number
          new_employee: string
        }
        Returns: undefined
      }
      change_status_superuser: {
        Args: {
          u_id: string
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
          customerinquiry: boolean
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
      setup_name: {
        Args: {
          employee_name: string
          u_id: string
        }
        Returns: undefined
      }
      show_parent_details: {
        Args: {
          parent_id: number
        }
        Returns: {
          id: number
          created_at: string
          child_count: string
          close_date: string
          status: string
          employee: string
          customer_id: number
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
      update_child_count:
        | {
            Args: {
              par_id: number
            }
            Returns: undefined
          }
        | {
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
