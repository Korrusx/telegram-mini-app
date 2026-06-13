import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initTelegram } from "@app/providers/Telegram/telegram.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "@shared/theme/theme";
import App from "./App";

import "./index.css";

initTelegram();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
