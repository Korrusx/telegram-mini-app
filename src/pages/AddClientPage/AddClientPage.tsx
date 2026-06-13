import { useState } from "react";
import { Typography, TextField, MenuItem, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";

import {
  Page,
  Header,
  AvatarBox,
  AvatarCircle,
  Form,
  SaveButton,
} from "./AddClientPage.styled";
import { getTelegramUser } from "@app/providers/Telegram/telegram";
import { supabase } from "@app/providers/Supabase/supabase.ts";

const services = ["Маникюр", "Брови", "Массаж", "Стрижка", "Ресницы"];
const cycles = ["Разово", "Каждые 2 недели", "Каждый месяц", "Раз в 2 месяца"];

export const AddClientPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    service: "",
    cycle: "",
    phone: "",
    notes: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    try {
      const tgUser = getTelegramUser();

      const { error } = await supabase.from("clients").insert([
        {
          user_id: tgUser?.id, // привязка к юзеру Telegram
          name: form.name,
          service: form.service,
          cycle: form.cycle,
          phone: form.phone,
          notes: form.notes,
        },
      ]);

      if (error) throw error;

      navigate("/clients");
    } catch (e) {
      console.error("SUPABASE ERROR:", e);
    }
  };

  return (
    <Page>
      <Header>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Новый клиент
        </Typography>
      </Header>

      {/* AVATAR */}
      <AvatarBox>
        <AvatarCircle>
          <PhotoCameraIcon />
        </AvatarCircle>
        <Typography sx={{ fontSize: 13, color: "#64748b" }}>
          Добавить фото
        </Typography>
      </AvatarBox>

      {/* FORM */}
      <Form>
        <TextField
          label="Имя клиента"
          fullWidth
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <TextField
          select
          label="Услуга"
          fullWidth
          value={form.service}
          onChange={(e) => handleChange("service", e.target.value)}
        >
          {services.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Цикл повторения"
          fullWidth
          value={form.cycle}
          onChange={(e) => handleChange("cycle", e.target.value)}
        >
          {cycles.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Телефон клиента"
          fullWidth
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <TextField
          label="Заметки"
          fullWidth
          multiline
          minRows={3}
          value={form.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
        />
      </Form>

      <SaveButton fullWidth variant="contained" onClick={handleSave}>
        Сохранить клиента
      </SaveButton>
    </Page>
  );
};
