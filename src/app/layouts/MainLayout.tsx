import { Outlet } from "react-router-dom";
import { AppBottomNavigation } from "../../widgets/ bottom-navigation/ui";

export const MainLayout = () => {
  return (
    <>
      <Outlet />

      <AppBottomNavigation />
    </>
  );
};
