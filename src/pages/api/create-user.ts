import { NextApiRequest, NextApiResponse } from 'next'

import { createClient } from '@supabase/supabase-js'

import { Database } from '@/types/supabase'

const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SERVICE_ROLE!
)

interface RequestBody {
  email: string
  password: string
  name: string
  role: string
  country: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, name, role, country }: RequestBody = req.body

  const { error } = await supabase.auth.admin.createUser({
    email,
    password,
    user_metadata: {
      name,
      role,
      country
    }
  })

  if (error) {
    return res.status(error.status || 500).json({ error: error.message })
  }

  return res.status(200).json({ message: 'User created successfully' })
}
