import styled from "styled-components";
import { Box, Paper, Stack, Typography, Avatar } from "@mui/material";

export const Page = styled(Box)`
  padding: 16px;
  background: #f6f7fb;
  min-height: 100vh;
`;

export const Header = styled(Typography)`
  font-weight: 700;
  margin-bottom: 16px;
  color: black;
`;

export const MainCard = styled(Paper)`
  && {
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 16px;
    background: linear-gradient(180deg, #8a7cff 0%, #4b3fd9 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const StatsRow = styled(Stack)`
  margin-bottom: 24px;
`;

export const StatCard = styled(Paper)<{ bg?: string }>`
  && {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    min-height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${({ bg }) => bg || "#fff"};
  }
`;

export const ClientsStack = styled(Stack)`
  gap: 12px;
`;

export const ClientCard = styled(Paper)`
  && {
    padding: 16px;
    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
  background: #6954ee;
`;

export const ClientName = styled(Typography)`
  font-weight: 600;
`;

export const ClientService = styled(Typography)`
  color: #64748b;
  font-size: 14px;
`;

export const StatusText = styled(Typography)<{ color: string }>`
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const SmallText = styled(Typography)`
  font-size: 12px;
  color: #94a3b8;
`;
