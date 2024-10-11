import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { PlusCircle } from "lucide-react";

const NoteForm = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() !== "") {
      onAddNote(newNote);
      setNewNote("");
    }
  };

  return (
    <Paper className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <TextField
          fullWidth
          variant="outlined"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Tulis catatan baru..."
          className="mr-2"
        />
        <Button
          type="submit"
          variant="contained"
          className="bg-indigo-600 hover:bg-indigo-700"
          startIcon={<PlusCircle size={20} />}
        >
          Tambah
        </Button>
      </form>
    </Paper>
  );
};

export default NoteForm;
