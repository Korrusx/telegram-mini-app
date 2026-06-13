type TgUser = {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
};

function getTelegram() {
  if (typeof window === "undefined") return null;
  return window.Telegram?.WebApp ?? null;
}

/**
 * Telegram считается активным только если есть WebApp и initDataUnsafe.user
 */
export function isTelegramApp() {
  const tg = getTelegram();
  return !!tg?.initDataUnsafe?.user;
}

/**
 * Инициализация WebApp (только в Telegram)
 */
export function initTelegram() {
  const tg = getTelegram();

  if (!tg?.initDataUnsafe?.user) return;

  tg.ready();
  tg.expand();
}

/**
 * Получение пользователя
 * - в Telegram → real user
 * - не в Telegram → null
 */
export function getTelegramUser(): TgUser | null {
  const tg = getTelegram();

  if (!tg?.initDataUnsafe?.user) return null;

  return tg.initDataUnsafe.user;
}

/**
 * initData для backend (понадобится позже для проверки подписи)
 */
export function getTelegramInitData() {
  const tg = getTelegram();

  if (!tg?.initDataUnsafe?.user) return null;

  return tg.initData || null;
}
