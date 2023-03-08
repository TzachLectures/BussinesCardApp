import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
}
