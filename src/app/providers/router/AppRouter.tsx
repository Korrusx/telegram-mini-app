import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../../layouts/MainLayout.tsx";

import {
  AddClientPage,
  ClientsPage,
  ReturnEnginePage,
  MorePage,
} from "@pages/index.ts";

// import { IncomePage } from "../../../pages/Income/ui/IncomePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ReturnEnginePage />} />

          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/add" element={<AddClientPage />} />

          {/*<Route path="/income" element={<IncomePage />} />*/}

          <Route path="/more" element={<MorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
