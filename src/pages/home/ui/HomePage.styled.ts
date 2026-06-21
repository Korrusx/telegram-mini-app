import styled from "styled-components";
import { Box, Paper, Stack } from "@mui/material";
import { colors } from "@shared/theme/colors";

export const Page = styled(Box)`
  padding: 16px;
  background: ${colors.grey[20]};
  min-height: 100vh;
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