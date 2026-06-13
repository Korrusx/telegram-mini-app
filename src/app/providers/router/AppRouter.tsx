import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../../layouts/MainLayout.tsx";

import { ReturnEnginePage } from "@pages/ReturnEngine/ReturnEnginePage.tsx";
import { MorePage } from "@pages/More/MorePage.tsx";
// import { ClientsPage } from "../../../pages/Clients/ui/ClientsPage";
// import { IncomePage } from "../../../pages/Income/ui/IncomePage";
// import { MorePage } from "../../../pages/More/ui/MorePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ReturnEnginePage />} />

          {/*<Route path="/clients" element={<ClientsPage />} />*/}

          {/*<Route path="/income" element={<IncomePage />} />*/}

          <Route path="/more" element={<MorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
