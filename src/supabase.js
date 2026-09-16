import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.co'

const supabaseAnonKey = 'sb_publishable_p-YN04N8yT9P2R_tEY16Iw_b-gk1XbL' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
