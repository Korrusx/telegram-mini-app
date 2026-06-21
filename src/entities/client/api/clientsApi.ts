import { supabase } from "@shared/api/supabase";
import type { Client } from "../model/types";

export async function fetchClientsByUser(userId: number): Promise<Client[]> {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function createClient(client: {
  user_id: number;
  name: string;
  service: string;
  cycle: string;
  phone: string;
  notes: string;
}) {
  const { error } = await supabase.from("clients").insert([client]);
  if (error) throw error;
}