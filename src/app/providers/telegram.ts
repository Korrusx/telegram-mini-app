import WebApp from "@twa-dev/sdk";

export const tg = WebApp;

export function initTelegram() {
  if (!tg || !tg.ready) {
    console.warn("Telegram WebApp not available");
    return;
  }

  tg.ready();
  tg.expand();
}
