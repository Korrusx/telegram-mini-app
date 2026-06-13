import styled from "styled-components";
import { Box, Paper, Stack, Typography, Avatar } from "@mui/material";
import { colors } from "@shared/theme/colors.ts";

export const Page = styled(Box)`
  padding: 16px;
  background: ${colors.grey[20]};
  min-height: 100vh;
`;

export const Header = styled(Typography)`
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.grey[1000]};
`;

export const MainCard = styled(Paper)`
  && {
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 16px;

    background: linear-gradient(
      180deg,
      ${colors.primary.light} 0%,
      ${colors.primary.main} 100%
    );

    color: ${colors.common.white};

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

    background: ${({ bg }) => bg || colors.common.white};
    box-shadow: 0 2px 10px ${colors.greyAlpha[40]};
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
