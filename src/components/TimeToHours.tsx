import { useState } from "react";
import { TextField, Container, Typography, Box, Paper } from "@mui/material";

export default function TimeConverter() {
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
    <Container maxWidth="sm" sx={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      background: "#1a1a1a", 
      color: "#fff" 
    }}>
      <Paper elevation={10} sx={{ 
        padding: 4, 
        textAlign: "center", 
        borderRadius: 3, 
        background: "#333", 
        color: "#fff", 
        border: "2px solid #555" 
      }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: "#ff5733" }}>⚡ Конвертер времени</Typography>
        <Box display="flex" gap={2}>
          <TextField
            label="Часы"
            variant="filled"
            value={hours}
            onChange={handleHoursChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ 
              input: { color: "#fff" }, 
              label: { color: "#bbb" }, 
              background: "#222", 
              borderRadius: 1, 
              border: "1px solid #555" 
            }}
          />
          <TextField
            label="Минуты"
            variant="filled"
            value={minutes}
            onChange={handleMinutesChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ 
              input: { color: "#fff" }, 
              label: { color: "#bbb" }, 
              background: "#222", 
              borderRadius: 1, 
              border: "1px solid #555" 
            }}
          />
        </Box>
        <Typography variant="h5" sx={{ marginTop: 3, fontWeight: "bold", color: "#ff5733" }}>⏰ Результат: {convertedTime} ч</Typography>
      </Paper>
    </Container>
  );
}