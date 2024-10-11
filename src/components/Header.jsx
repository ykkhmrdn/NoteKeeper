import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <AppBar
      position="static"
      className="bg-gradient-to-r from-purple-600 to-indigo-600"
    >
      <Toolbar className="justify-between">
        <div className="flex items-center">
          <BookOpen className="mr-2 text-white" size={24} />
          <Typography variant="h6" component="div" className="font-bold">
            NoteKeeper
          </Typography>
        </div>
        <Typography variant="body2" className="text-gray-200">
          Simpan idemu, kapanpun, dimanapun
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
