import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cuorzocgudiwaofraldg.supabase.co";
const supabaseKey = import.meta.env.VITE_DATABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
