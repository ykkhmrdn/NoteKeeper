import { Typography, Container, Grid } from "@mui/material";
import NoteItem from "./NoteItem";

export default function NoteArchive({
  archivedNotes,
  deleteNote,
  toggleArchive,
}) {
  return (
    <Container>
      <Typography variant="h6" color= "primary" sx={{ mt: 4, mb: 2 }}>
        Catatan Arsip
      </Typography>
      <Grid container spacing={2}>
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleArchive={toggleArchive}
            />
          ))
        ) : (
          <Typography>Tidak ada catatan arsip.</Typography>
        )}
      </Grid>
    </Container>
  );
}
