import { useEffect } from "react";
import { AppRouter } from "@app/providers/router";
import { initTelegram } from "@shared/lib/telegram";
import { ensureUser } from "@shared/api/users";

function App() {
  useEffect(() => {
    initTelegram();
    void ensureUser();
  }, []);

  return <AppRouter />;
}

export default App;