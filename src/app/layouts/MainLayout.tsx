import { Outlet } from "react-router-dom";
import { AppBottomNavigation } from "@widgets/bottom-navigation";

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <AppBottomNavigation />
    </>
  );
};