export type Client = {
  id: string;
  user_id: number;
  name: string;
  service: string | null;
  cycle: string | null;
  phone: string | null;
  notes: string | null;
  avatar_url: string | null;
  status: string | null;
  created_at: string;
};