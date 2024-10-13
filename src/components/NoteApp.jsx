import React, { useState } from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";
import { getInitialData } from "../utils";

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const onAddNoteHandler = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const onDeleteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const onArchiveHandler = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const onSearchHandler = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="note-app">
      <h1>Aplikasi Catatan</h1>
      <NoteSearch searchKeyword={searchKeyword} onSearch={onSearchHandler} />
      <NoteInput addNote={onAddNoteHandler} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={activeNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={archivedNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
      />
    </div>
  );
}

export default NoteApp;
