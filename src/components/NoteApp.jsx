import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import Header from "./Header";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Footer from "./Footer";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (content) => {
    setNotes([...notes, { id: Date.now(), content }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Container maxWidth="md" className="flex-grow my-8">
        <Typography
          variant="h4"
          component="h1"
          className="mb-6 font-bold text-center text-indigo-800"
        >
          Catatan Saya
        </Typography>
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      </Container>
      <Footer />
    </div>
  );
};

export default NoteApp;
