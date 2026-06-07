import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initTelegram } from "./app/providers/telegram";
import App from "./App";

import "./index.css";

initTelegram();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
