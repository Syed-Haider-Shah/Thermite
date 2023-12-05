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
      employees: {
        Row: {
          country: string | null
          created_at: string
          id: string
          name: string | null
          number_of_assigned_tickets: number
          number_of_closed_tickets: number
          role: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          id: string
          name?: string | null
          number_of_assigned_tickets?: number
          number_of_closed_tickets?: number
          role?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          id?: string
          name?: string | null
          number_of_assigned_tickets?: number
          number_of_closed_tickets?: number
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'employees_id_fkey'
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
            referencedRelation: 'employees'
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
      count_assigned_employees: {
        Args: {
          user_id: string
        }
        Returns: number
      }
      count_children: {
        Args: {
          par_id: number
        }
        Returns: number
      }
      count_parent_tickets: {
        Args: Record<PropertyKey, never>
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
      get_parent_tickets: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          child_count: string
          close_date: string
          status: string
          employee: string
          employee_id: string
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
      update_assigned_number_tickets: {
        Args: {
          user_id: string
        }
        Returns: undefined
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never
