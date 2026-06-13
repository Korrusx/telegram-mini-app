import { useMemo } from "react";
import { getTelegramUser, isTelegramApp } from "../telegram";

export function useTelegramUser() {
  return useMemo(() => {
    return {
      user: getTelegramUser(),
      isTelegram: isTelegramApp(),
    };
  }, []);
}
