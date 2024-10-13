import { useState } from "react";
import { Container, Typography } from "@mui/material";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteArchive from "./components/NoteArchive";
import SearchAppBar from "./components/Header";
import Footer from "./components/Footer";
import { getInitialData } from "./utils";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState("");

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <>
      <Container>
        <SearchAppBar query={query} setQuery={setQuery} />
        <NoteForm addNote={addNote} />
        <NoteList
          notes={activeNotes}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />

        {activeNotes.length === 0 && (
          <Typography>Tidak ada catatan aktif.</Typography>
        )}

        <NoteArchive
          archivedNotes={archivedNotes}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
      </Container>
      <Footer />
    </>
  );
}
