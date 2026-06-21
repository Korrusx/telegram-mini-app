import styled from "styled-components";
import { Box, Paper, Stack, Typography, Avatar } from "@mui/material";
import { colors } from "@shared/theme/colors";

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
  && {
    width: 48px;
    height: 48px;
    background: ${colors.blue[500]};
  }
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