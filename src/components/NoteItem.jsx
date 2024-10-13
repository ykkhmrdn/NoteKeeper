import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";

export default function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5">{note.title}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {note.body}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteNote(note.id)}
            >
              Hapus
            </Button>
            <Button variant="outlined" onClick={() => toggleArchive(note.id)}>
              {note.archived ? "Pindahkan" : "Arsipkan"}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
