import { useEffect, useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

import { useTelegramUser } from "@app/providers/Telegram/hooks/useTelegramUser";

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
import { supabase } from "@app/providers/Supabase/supabase";

type TabType = "all" | "active" | "regular";

export const ClientsPage = () => {
  const navigate = useNavigate();
  const { user } = useTelegramUser();

  const [tab, setTab] = useState<TabType>("all");
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // LOAD CLIENTS FROM SUPABASE
  // =========================
  useEffect(() => {
    if (!user?.id) return;

    const fetchClients = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("SUPABASE ERROR:", error);
        setLoading(false);
        return;
      }

      setClients(data || []);
      setLoading(false);
    };

    fetchClients();
  }, [user?.id]);

  // =========================
  // FILTERS
  // =========================
  const getFiltered = () => {
    if (tab === "all") return clients;

    if (tab === "active") return clients.filter((c) => c.status === "Активный");

    if (tab === "regular")
      return clients.filter((c) => c.status === "Постоянный");

    return clients;
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

  // =========================
  // UI
  // =========================
  return (
    <Page>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Клиенты
      </Typography>

      {/* SEARCH */}
      <SearchRow>
        <TextField fullWidth size="small" placeholder="Поиск клиентов" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </SearchRow>

      {/* TABS */}
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

      {/* LIST */}
      <ScrollArea>
        {loading && (
          <Typography sx={{ color: "#64748b" }}>Загрузка...</Typography>
        )}

        {getFiltered().map((client) => (
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
                <StatusText color={getStatusColor(client.status)}>
                  {client.status}
                </StatusText>

                <SmallText>{client.days ?? 0} дней назад</SmallText>
              </Box>

              <MenuButton onClick={() => console.log("menu", client.id)}>
                <MoreVertIcon />
              </MenuButton>
            </ClientActions>
          </ClientCard>
        ))}

        {!loading && getFiltered().length === 0 && (
          <Typography sx={{ color: "#94a3b8", textAlign: "center", mt: 2 }}>
            Нет клиентов
          </Typography>
        )}
      </ScrollArea>

      {/* ADD BUTTON */}
      <AddClientButton onClick={() => navigate("/clients/add")}>
        Добавить клиента
      </AddClientButton>
    </Page>
  );
};
