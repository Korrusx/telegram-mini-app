import { supabase } from "./supabase";
import { getTelegramUser } from "@shared/lib/telegram";

export async function ensureUser() {
  const tgUser = getTelegramUser();
  if (!tgUser) return;
  if (sessionStorage.getItem("user_synced")) return;

  await supabase.from("users").upsert(
    {
      telegram_id: tgUser.id,
      username: tgUser.username ?? null,
      first_name: tgUser.first_name,
      last_name: tgUser.last_name ?? null,
    },
    { onConflict: "telegram_id" }
  );

  sessionStorage.setItem("user_synced", "1");
}