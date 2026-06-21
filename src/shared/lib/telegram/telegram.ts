import "@twa-dev/sdk";

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

function getWebApp() {
  return window.Telegram?.WebApp ?? null;
}

export function initTelegram() {
  if (isDev) return;

  const wa = getWebApp();
  if (!wa) return;

  wa.ready();
  wa.expand();
}

export function getTelegramUser(): TgUser | null {
  if (isDev) return mockUser;
  return getWebApp()?.initDataUnsafe?.user ?? null;
}

export function getTelegramInitData() {
  if (isDev) return "mock-init-data";
  return getWebApp()?.initData ?? null;
}

export function isTelegramApp() {
  return !isDev && !!getWebApp()?.initDataUnsafe?.user;
}
