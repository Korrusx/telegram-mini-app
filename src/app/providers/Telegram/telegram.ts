import WebApp from "@twa-dev/sdk";

export const tg = WebApp;

export type TgUser = {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
};

const mockUser: TgUser = {
  id: 999999,
  first_name: "Тестовый",
  last_name: "Пользователь",
  username: "test_user",
  language_code: "ru",
  photo_url: "",
};

const isDev = import.meta.env.DEV;

export function initTelegram() {
  if (isDev) return;

  tg.ready();
  tg.expand();
}

export function getTelegramUser(): TgUser | null {
  if (isDev) return mockUser;
  return tg.initDataUnsafe?.user ?? null;
}

export function getTelegramInitData() {
  if (isDev) return "mock-init-data";
  return tg.initData ?? null;
}

export function isTelegramApp() {
  return !isDev && !!tg.initDataUnsafe?.user;
}
