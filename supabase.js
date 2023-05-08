import { createClient } from '@supabase/supabase-js'

const supabaseUrl = procesprocess.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = procesprocess.env.NEXT_PUBLIC_ANON_KEY

const supabase = createClient(supabaseUrl , supabaseAnonKey)

export { supabase }