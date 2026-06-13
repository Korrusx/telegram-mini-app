import { useMemo } from "react";
import { getTelegramUser } from "../telegram";

export function useTelegramUser() {
  return useMemo(() => {
    const user = getTelegramUser();

    return {
      user,
      isTelegram: !!user,
    };
  }, []);
}
