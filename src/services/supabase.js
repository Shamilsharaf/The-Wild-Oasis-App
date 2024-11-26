import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bsbpmuzliurcfolfyoel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzYnBtdXpsaXVyY2ZvbGZ5b2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjA5NjUsImV4cCI6MjA0NzQ5Njk2NX0.BeqEBrfcc3wtHjkR3Ij6h8HhC5eNwAMTl-PwzMZab8c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
