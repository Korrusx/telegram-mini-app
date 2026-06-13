type TgUser = {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
};

const mockUser: TgUser = {
  id: 1,
  first_name: "Dev",
  username: "dev_user",
  photo_url: "",
};

function getTelegram() {
  if (typeof window === "undefined") return null;
  return window.Telegram?.WebApp ?? null;
}

/**
 * Telegram считается активным только если есть initData
 * (это самый стабильный признак Mini App)
 */
export function isTelegramApp() {
  const tg = getTelegram();
  return !!tg?.initData;
}

/**
 * Инициализация WebApp (только в Telegram)
 */
export function initTelegram() {
  const tg = getTelegram();

  if (!tg?.initData) return;

  tg.ready();
  tg.expand();
}

/**
 * Получение пользователя
 * - в Telegram → real user
 * - вне Telegram → mock
 */
export function getTelegramUser(): TgUser {
  const tg = getTelegram();

  const isTelegram = !!tg?.initData;

  if (!isTelegram) return mockUser;

  return tg?.initDataUnsafe?.user ?? mockUser;
}

/**
 * initData для backend (понадобится позже для проверки подписи)
 */
export function getTelegramInitData() {
  const tg = getTelegram();

  const isTelegram = !!tg?.initData;

  if (!isTelegram) return "mock-init-data";

  return tg!.initData;
}
