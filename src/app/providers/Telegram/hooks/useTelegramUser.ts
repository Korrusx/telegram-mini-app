import { useMemo } from "react";
import { getTelegramUser, isTelegramApp } from "../telegram.ts";

export function useTelegramUser() {
  return useMemo(() => {
    return {
      user: getTelegramUser(),
      isTelegram: isTelegramApp(),
    };
  }, []);
}
