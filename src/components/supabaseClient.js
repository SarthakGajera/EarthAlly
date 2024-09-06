// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eokklqyodbyiitxpayfz.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVva2tscXlvZGJ5aWl0eHBheWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NzA3OTgsImV4cCI6MjA0MTE0Njc5OH0.GtDKfm3SpFcoZzq12vczpuVME--7VOb4-I3b0117qkg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
