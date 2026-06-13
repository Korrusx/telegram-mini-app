import styled from "styled-components";
import { Box, Paper, Avatar } from "@mui/material";

export const Page = styled(Box)`
  padding: 16px;
  background: #f6f7fb;
  min-height: 100vh;
`;

export const ProfileCard = styled(Paper)`
  && {
    padding: 16px;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
  }
`;

export const ProfileInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  background: #6954ee;
  font-weight: 600;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProfileName = styled(Box)`
  font-weight: 600;
  font-size: 14px;
  color: #111;
`;

export const ProfileRole = styled(Box)`
  font-size: 12px;
  color: #64748b;
`;
