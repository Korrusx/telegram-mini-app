import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { HomePage, ClientsPage, AddClientPage, MorePage } from "@pages/index";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/add" element={<AddClientPage />} />
          <Route path="/more" element={<MorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};