import { useEffect } from "react";
import { AppRouter } from "@app/providers/router";
import { getTelegramUser, initTelegram } from "@app/providers/Telegram/telegram";
import { supabase } from "@app/providers/Supabase/supabase";

async function ensureUser() {
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

function App() {
  useEffect(() => {
    initTelegram();
    ensureUser();
  }, []);

  return <AppRouter />;
}

export default App;
