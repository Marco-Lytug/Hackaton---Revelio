 import { createClient } from '@supabase/supabase-js'

const urlSupabase = 'https://supabase.co'

const chaveAnonimaSupabase = 'sb_publishable_p-YN04N8yT9P2R_tEY16Iw_b-gk1XbL'

export const conexaoSupabase = createClient(urlSupabase, chaveAnonimaSupabase)
