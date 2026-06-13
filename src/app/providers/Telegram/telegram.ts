import WebApp from "@twa-dev/sdk";

const isDev = import.meta.env.DEV;

export const tg = WebApp;

export function initTelegram() {
  tg.ready();
  tg.expand();
}

export function getTelegramUser() {
  if (isDev) {
    return {
      id: 1,
      first_name: "Dev",
      username: "dev_user",
      photo_url: "",
    };
  }

  return tg.initDataUnsafe?.user ?? null;
}

export function getTelegramInitData() {
  return tg.initData;
}
