import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hwmsutkynrczfapqgstm.supabase.co";
const supabaseKey = "sb_publishable_W4Wzb9qrRfXlwOmRd337wQ_DzYm0dae";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
