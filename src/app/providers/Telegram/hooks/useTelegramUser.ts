import { useMemo } from "react";
import { getTelegramUser } from "../telegram.ts";

export const useTelegramUser = () => {
  const user = useMemo(() => getTelegramUser(), []);

  return {
    user,
    isAuth: !!user,
  };
};
