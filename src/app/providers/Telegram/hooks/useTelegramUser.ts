import { useMemo } from "react";
import { getTelegramUser, isTelegramApp } from "../telegram";

export const useTelegramUser = () => {
  const user = useMemo(() => getTelegramUser(), []);
  const isTelegram = useMemo(() => isTelegramApp(), []);

  return {
    user,
    isAuth: !!user,
    isTelegram,
  };
};
