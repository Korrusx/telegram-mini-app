import WebApp from "@twa-dev/sdk";

const isMock = import.meta.env.VITE_MOCK_TELEGRAM === "true";

const mockUser = {
  id: 1,
  first_name: "Алексей",
  username: "dev_user",
  photo_url: "",
};

export const tg = WebApp;

export function initTelegram() {
  if (isMock) return;

  tg.ready();
  tg.expand();
}

export function getTelegramUser() {
  if (isMock) return mockUser;

  return tg.initDataUnsafe?.user ?? null;
}

export function getTelegramInitData() {
  if (isMock) return "mock-init-data";

  return tg.initData;
}
