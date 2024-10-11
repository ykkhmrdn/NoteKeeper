import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from "@mui/material";
import { Trash2 } from "lucide-react";

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <List>
      {notes.map((note) => (
        <ListItem
          key={note.id}
          component={Paper}
          className="mb-2 transition-shadow duration-200 bg-white rounded-lg shadow-sm hover:shadow-md"
        >
          <ListItemText
            primary={note.content}
            primaryTypographyProps={{ className: "text-gray-800" }}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDeleteNote(note.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default NoteList;
