import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Bold } from "lucide-react";

export default function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle("");
    setBody("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mb: 2,
        mt: 10,
        maxWidth: "md",
        mx: "auto",
        p: 2,
        boxShadow: 3,
        borderRadius: 2, 
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h6" color="primary" sx={{ fontSize: "xl", mb: 0.5 }}>
        Tambah Catatan Baru
      </Typography>
      <TextField
        label="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ maxLength: maxTitleLength }}
        autoFocus
        required
        sx={{ maxWidth: "md", mx: "auto" }} 
      />
      <Typography variant="body2">
        {maxTitleLength - title.length} karakter tersisa
      </Typography>
      <TextField
        label="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        variant="outlined"
        required
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Tambah Catatan
      </Button>
    </Box>
  );
}
