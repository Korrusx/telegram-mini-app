import { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  Page,
  TabsRow,
  TabItem,
  ScrollArea,
  ClientCard,
  ClientInfo,
  ClientAvatar,
  ClientDetail,
  ClientName,
  ClientService,
  StatusText,
  SmallText,
  SearchRow,
  AddClientButton,
  ClientActions,
  MenuButton,
} from "./ClientsPage.styled";

const mockClients = [
  {
    id: 1,
    name: "Анна Иванова",
    service: "Маникюр",
    status: "Активный",
    days: 27,
    avatar: "А",
  },
  {
    id: 2,
    name: "Мария Петрова",
    service: "Брови",
    status: "Постоянный",
    days: 24,
    avatar: "М",
  },
  {
    id: 3,
    name: "Екатерина Смирнова",
    service: "Массаж",
    status: "Активный",
    days: 12,
    avatar: "Е",
  },
];

export const ClientsPage = () => {
  const [tab, setTab] = useState<"all" | "active" | "regular">("all");

  const getFiltered = () => {
    if (tab === "all") return mockClients;
    if (tab === "active")
      return mockClients.filter((c) => c.status === "Активный");
    if (tab === "regular")
      return mockClients.filter((c) => c.status === "Постоянный");
    return mockClients;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "#6954EE";
      case "Постоянный":
        return "#22c55e";
      default:
        return "#64748b";
    }
  };

  return (
    <Page>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Клиенты
      </Typography>

      <SearchRow>
        <TextField fullWidth size="small" placeholder="Поиск клиентов" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </SearchRow>

      <TabsRow>
        <TabItem active={tab === "all"} onClick={() => setTab("all")}>
          Все
        </TabItem>
        <TabItem active={tab === "active"} onClick={() => setTab("active")}>
          Активные
        </TabItem>
        <TabItem active={tab === "regular"} onClick={() => setTab("regular")}>
          Постоянные
        </TabItem>
      </TabsRow>

      <ScrollArea>
        {getFiltered().map((client) => (
          <ClientCard key={client.id} elevation={0}>
            <ClientInfo>
              <ClientAvatar>{client.avatar}</ClientAvatar>
              <ClientDetail>
                <ClientName>{client.name}</ClientName>
                <ClientService>{client.service}</ClientService>
              </ClientDetail>
            </ClientInfo>

            <ClientActions>
              <Box sx={{ textAlign: "right" }}>
                <StatusText color={getStatusColor(client.status)}>
                  {client.status}
                </StatusText>
                <SmallText>{client.days} дней назад</SmallText>
              </Box>
              <MenuButton onClick={() => console.log("menu", client.id)}>
                <MoreVertIcon />
              </MenuButton>
            </ClientActions>
          </ClientCard>
        ))}
      </ScrollArea>

      <AddClientButton
        variant="contained"
        onClick={() => console.log("add client")}
      >
        Добавить клиента
      </AddClientButton>
    </Page>
  );
};
