import { useEffect, useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

import {
  Page,
  TabsRow,
  TabItem,
  ScrollArea,
  SearchRow,
  AddClientButton,
  ClientActions,
  MenuButton,
} from "./ClientsPage.styled";
import {
  ClientCard,
  ClientInfo,
  ClientAvatar,
  ClientDetail,
  ClientName,
  ClientService,
  StatusText,
  SmallText,
  fetchClientsByUser,
} from "@entities/client";
import type { Client } from "@entities/client";
import { useTelegramUser } from "@shared/lib/telegram";

type TabType = "all" | "active" | "regular";

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

export const ClientsPage = () => {
  const navigate = useNavigate();
  const { user } = useTelegramUser();

  const [tab, setTab] = useState<TabType>("all");
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchClientsByUser(user.id);
        setClients(data);
      } catch (e) {
        console.error("SUPABASE ERROR:", e);
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [user?.id]);

  const filtered = (() => {
    if (tab === "active") return clients.filter((c) => c.status === "Активный");
    if (tab === "regular") return clients.filter((c) => c.status === "Постоянный");
    return clients;
  })();

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
        {loading && (
          <Typography sx={{ color: "#64748b" }}>Загрузка...</Typography>
        )}

        {filtered.map((client) => (
          <ClientCard key={client.id} elevation={0}>
            <ClientInfo>
              <ClientAvatar>{client.name?.[0] ?? "?"}</ClientAvatar>

              <ClientDetail>
                <ClientName>{client.name}</ClientName>
                <ClientService>{client.service}</ClientService>
              </ClientDetail>
            </ClientInfo>

            <ClientActions>
              <Box sx={{ textAlign: "right" }}>
                <StatusText color={getStatusColor(client.status ?? "")}>
                  {client.status}
                </StatusText>
                <SmallText>{client.cycle ?? ""}</SmallText>
              </Box>

              <MenuButton onClick={() => console.log("menu", client.id)}>
                <MoreVertIcon />
              </MenuButton>
            </ClientActions>
          </ClientCard>
        ))}

        {!loading && filtered.length === 0 && (
          <Typography sx={{ color: "#94a3b8", textAlign: "center", mt: 2 }}>
            Нет клиентов
          </Typography>
        )}
      </ScrollArea>

      <AddClientButton onClick={() => navigate("/clients/add")}>
        Добавить клиента
      </AddClientButton>
    </Page>
  );
};