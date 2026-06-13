import { Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

import {
  Page,
  ProfileCard,
  ProfileInfo,
  ProfileAvatar,
  ProfileName,
  ProfileRole,
  ProfileBox,
} from "./MorePage.styled";
import { useTelegramUser } from "@app/providers/Telegram";

export const MorePage = () => {
  const { user } = useTelegramUser();
  const navigate = useNavigate();

  const avatarText = user?.first_name?.[0] ?? "U";

  return (
    <Page>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Ещё
      </Typography>

      <ProfileCard onClick={() => navigate("/profile")}>
        <ProfileInfo>
          <ProfileAvatar>
            {user?.photo_url ? (
              <img src={user.photo_url} alt="avatar" />
            ) : (
              avatarText
            )}
          </ProfileAvatar>

          <ProfileBox>
            <ProfileName>{user?.first_name ?? "Пользователь"}</ProfileName>
            <ProfileRole>самозанятый</ProfileRole>
          </ProfileBox>
        </ProfileInfo>

        <ChevronRightIcon sx={{ color: "#94a3b8" }} />
      </ProfileCard>
    </Page>
  );
};
