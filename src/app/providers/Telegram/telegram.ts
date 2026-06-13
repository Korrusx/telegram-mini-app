type TgUser = {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
};

const tg = window.Telegram?.WebApp;

const isTelegram = !!tg?.initDataUnsafe?.user;

const mockUser: TgUser = {
  id: 1,
  first_name: "Dev",
  username: "dev_user",
  photo_url: "",
};

export function initTelegram() {
  if (!isTelegram) return;

  tg?.ready();
  tg?.expand();
}

export function getTelegramUser(): TgUser {
  if (!isTelegram) return mockUser;

  return tg!.initDataUnsafe.user || mockUser;
}

export function getTelegramInitData() {
  if (!isTelegram) return "mock-init-data";

  return tg!.initData;
}

export function isTelegramApp() {
  return isTelegram;
}
