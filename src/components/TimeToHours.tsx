import { useState } from "react";
import { TextField, Container, Typography, Box, Paper } from "@mui/material";

export default function TimeToHours() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleHoursChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Удаляем нецифровые символы
    setHours(value);
  };

  const handleMinutesChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMinutes(value);
  };

  const convertedTime = ((parseInt(hours || 0) * 60 + parseInt(minutes || 0)) / 60).toFixed(2);

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Paper elevation={4} sx={{ padding: 4, textAlign: "center", borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>Конвертер времени</Typography>
        <Box display="flex" gap={2}>
          <TextField
            label="Часы"
            variant="outlined"
            value={hours}
            onChange={handleHoursChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <TextField
            label="Минуты"
            variant="outlined"
            value={minutes}
            onChange={handleMinutesChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
        </Box>
        <Typography variant="h6" sx={{ marginTop: 2 }}>Результат: {convertedTime} ч</Typography>
      </Paper>
    </Container>
  );
}
