import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <footer className="py-4 mt-8 bg-gray-100">
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} NoteKeeper. Dibuat dengan ❤️ menggunakan
          React.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
