import styled from "styled-components";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { colors } from "@shared/theme/colors.ts";

export const Page = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${colors.grey[20]};
`;

export const SearchRow = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const TabsRow = styled(Box)`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TabItem = styled(Box)<{ active: boolean }>`
  flex: 1;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  background: ${({ active }) =>
    active ? colors.primary.main : colors.common.white};
  color: ${({ active }) => (active ? colors.common.white : colors.grey[600])};
`;

export const ScrollArea = styled(Box)`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 90px;
`;

// ТОЧНО ТАКАЯ ЖЕ КАРТОЧКА КАК НА ГЛАВНОЙ
export const ClientCard = styled(Paper)`
  && {
    padding: 16px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.common.white};
    box-shadow: 0 2px 10px ${colors.greyAlpha[40]};
  }
`;

export const ClientInfo = styled(Stack)`
  && {
    flex-direction: row;
    gap: 12px;
    align-items: flex-start;
  }
`;

export const ClientDetail = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ClientAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  background: ${colors.blue[500]};
`;

export const ClientName = styled(Typography)`
  font-weight: 600;
  color: ${colors.grey[900]};
`;

export const ClientService = styled(Typography)`
  color: ${colors.grey[400]};
  font-size: 14px;
`;

export const StatusText = styled(Typography)<{ color: string }>`
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const SmallText = styled(Typography)`
  font-size: 12px;
  color: ${colors.grey[300]};
`;

export const ClientActions = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuButton = styled(IconButton)`
  && {
    color: ${colors.grey[400]};
    padding: 4px;
  }
`;

export const AddClientButton = styled(Button)`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 28px);
  max-width: 400px;
  background: ${colors.primary.main} !important;
  color: ${colors.common.white} !important;
  font-weight: 600;
  text-transform: none;
  border-radius: 12px !important;
  height: 40px;
  z-index: 10;
`;
