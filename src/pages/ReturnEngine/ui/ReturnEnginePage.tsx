import { Box, Typography } from "@mui/material";
import {
  Page,
  Header,
  MainCard,
  StatsRow,
  StatCard,
  ClientsStack,
  ClientCard,
  ClientInfo,
  ClientAvatar,
  ClientName,
  ClientService,
  StatusText,
  SmallText,
  ClientDetail,
} from "./ReturnEnginePage.styled.ts";

export const ReturnEnginePage = () => {
  const stats = {
    incomeToday: 12400,
    incomeYesterday: 9800,
    clients: 42,
    clientsDiff: 3,
    toReturn: 7,
    toReturnDiff: -2,
    bookings: 12,
  };

  const returnClients = [
    {
      id: 1,
      name: "Анна Иванова",
      service: "Маникюр",
      days: 27,
      status: "Просрочен",
      avatar: "А",
    },
    {
      id: 2,
      name: "Мария Петрова",
      service: "Брови",
      days: 24,
      status: "Пора написать",
      avatar: "М",
    },
    {
      id: 3,
      name: "Екатерина Смирнова",
      service: "Массаж",
      days: 12,
      status: "Скоро",
      avatar: "Е",
    },
  ];

  const diff = stats.incomeToday - stats.incomeYesterday;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Просрочен":
        return "#ef4444";
      case "Пора написать":
        return "#f59e0b";
      case "Скоро":
        return "#22c55e";
      default:
        return "#64748b";
    }
  };

  return (
    <Page>
      <Header variant="h6">Главная</Header>

      <MainCard elevation={0}>
        <Typography variant="body2">Доход сегодня</Typography>

        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          {stats.incomeToday.toLocaleString()} ₽
        </Typography>

        <Typography variant="body2">
          {diff >= 0 ? "+" : ""}
          {diff.toLocaleString()} ₽ к вчера
        </Typography>
      </MainCard>

      <StatsRow direction="row" spacing={1.5}>
        <StatCard bg="#E8F7ED">
          <Typography variant="caption">Клиенты</Typography>
          <Typography variant="h6">{stats.clients}</Typography>
          <Typography color="success.main">
            +{stats.clientsDiff} новых
          </Typography>
        </StatCard>

        <StatCard bg="#FFF6E5">
          <Typography variant="caption">Пора вернуть</Typography>
          <Typography variant="h6">{stats.toReturn}</Typography>
          <Typography variant="caption">
            {stats.toReturnDiff} к вчера
          </Typography>
        </StatCard>

        <StatCard bg="#E8F1FF">
          <Typography variant="caption">Записи</Typography>
          <Typography variant="h6">{stats.bookings}</Typography>
          <Typography variant="caption">на неделю</Typography>
        </StatCard>
      </StatsRow>

      {/* CLIENTS TITLE (без кнопки!) */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "black" }}>
        Ближайшие напоминания
      </Typography>

      <ClientsStack>
        {returnClients.map((client) => (
          <ClientCard key={client.id} elevation={0}>
            <ClientInfo>
              <ClientAvatar>{client.avatar}</ClientAvatar>

              <ClientDetail>
                <ClientName>{client.name}</ClientName>
                <ClientService>{client.service}</ClientService>
              </ClientDetail>
            </ClientInfo>

            <Box sx={{ textAlign: "right" }}>
              <StatusText color={getStatusColor(client.status)}>
                {client.status}
              </StatusText>
              <SmallText>{client.days} дней назад</SmallText>
            </Box>
          </ClientCard>
        ))}
      </ClientsStack>

      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography
          onClick={() => console.log("go to clients")}
          sx={{
            color: "#6954EE",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Смотреть всех
        </Typography>
      </Box>
    </Page>
  );
};
