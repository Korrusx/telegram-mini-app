import styled from "styled-components";
import { Box, Button, Avatar } from "@mui/material";

export const Page = styled(Box)`
  padding: 16px;
  min-height: 100vh;
  background: #f6f7fb;
  display: flex;
  flex-direction: column;
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const AvatarBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
`;

export const AvatarCircle = styled(Avatar)`
  width: 72px;
  height: 72px;
  background: #6954ee !important;
`;

export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const SaveButton = styled(Button)`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 32px);
  max-width: 420px;

  background: #6954ee !important;
  color: white !important;

  font-weight: 600;
  border-radius: 12px !important;
  text-transform: none;
`;
