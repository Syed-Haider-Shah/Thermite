import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.ANON_KEY
console.log(supabaseKey, supabaseUrl)
export const supabase = createClient(supabaseUrl!, supabaseKey!)
