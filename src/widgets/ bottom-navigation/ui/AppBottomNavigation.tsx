import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PaymentsIcon from "@mui/icons-material/Payments";
import MenuIcon from "@mui/icons-material/Menu";

import { useLocation, useNavigate } from "react-router-dom";

export const AppBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
      }}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, value) => navigate(value)}
      >
        <BottomNavigationAction value="/" label="Главная" icon={<HomeIcon />} />

        <BottomNavigationAction
          value="/clients"
          label="Клиенты"
          icon={<PeopleIcon />}
        />

        <BottomNavigationAction
          value="/add-client"
          icon={
            <AddCircleIcon
              sx={{
                fontSize: 42,
                color: "#6954EE",
              }}
            />
          }
        />

        <BottomNavigationAction
          value="/income"
          label="Доход"
          icon={<PaymentsIcon />}
        />

        <BottomNavigationAction value="/more" label="Еще" icon={<MenuIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
