import React from "react";
import { Grid, Typography, Card, CardContent, Button, CardActions } from "@mui/material";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, deleteNote, toggleArchive }) {
  return (
    <>
      <Typography variant="h4" color="primary" sx={{ mt: 4, mb: 2 }}>
        Daftar Catatan
      </Typography>
      <Grid container spacing={3} sx={{ padding: 2 }}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <Card
              sx={{
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {note.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                  {note.body}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteNote(note.id)}
                >
                  Hapus
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => toggleArchive(note.id)}
                >
                  {note.archived ? "Unarchive" : "Archive"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
