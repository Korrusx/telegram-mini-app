import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";

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
    {
      id: 4,
      name: "Ольга Васильева",
      service: "Маникюр",
      days: 21,
      status: "Пора написать",
      avatar: "О",
    },
  ];

  const diff = stats.incomeToday - stats.incomeYesterday;
  const percent = Math.round((diff / stats.incomeYesterday) * 100);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Просрочен":
        return "#ef4444";

      case "Пора написать":
        return "#f59e0b";

      case "Скоро":
        return "#22c55ue";

      default:
        return "#64748b";
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        background: "#F6F7FB",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={2}>
        Главная
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          mb: 2,

          background: "linear-gradient(180deg, #8A7CFF 0%, #4B3FD9 100%)",

          color: "#fff",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            opacity: 0.9,
          }}
        >
          Доход сегодня
        </Typography>

        <Typography variant="h3" fontWeight={700} sx={{ mt: 1 }}>
          {stats.incomeToday.toLocaleString()} ₽
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: diff >= 0 ? "rgba(255,255,255,0.9)" : "#ffd4d4",
          }}
        >
          {diff >= 0 ? "+" : ""}
          {diff.toLocaleString()} ₽ ({percent}% к вчера)
        </Typography>
      </Paper>

      <Stack direction="row" spacing={1.5} mb={3}>
        <Paper
          sx={{
            flex: 1,
            p: 1.5,
            borderRadius: 3,
            background: "#E8F7ED",
            minHeight: 100,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Клиенты
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            {stats.clients}
          </Typography>

          <Typography variant="caption" color="success.main">
            +{stats.clientsDiff} новых
          </Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 1.5,
            borderRadius: 3,
            background: "#FFF6E5",
            minHeight: 100,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Пора вернуть
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            {stats.toReturn}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {stats.toReturnDiff} к вчера
          </Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 1.5,
            borderRadius: 3,
            background: "#E8F1FF",
            minHeight: 100,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Записи
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            {stats.bookings}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            на неделю
          </Typography>
        </Paper>
      </Stack>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" fontWeight={700} textAlign="center" mb={2}>
          Пора написать
        </Typography>

        <Stack spacing={1.5}>
          {returnClients.slice(0, 3).map((client) => (
            <Paper
              key={client.id}
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 3,

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "#6954EE",
                  }}
                >
                  {client.avatar}
                </Avatar>

                <Box>
                  <Typography fontWeight={600}>{client.name}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    {client.service}
                  </Typography>
                </Box>
              </Stack>

              <Box textAlign="right">
                <Typography
                  fontWeight={600}
                  sx={{
                    color: getStatusColor(client.status),
                  }}
                >
                  {client.status}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {client.days} дней назад
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>

        <Button
          fullWidth
          variant="text"
          sx={{
            mt: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Смотреть всех
        </Button>
      </Box>
    </Box>
  );
};
