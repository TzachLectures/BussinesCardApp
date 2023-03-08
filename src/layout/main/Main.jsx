import { Box } from "@mui/material";
import { node } from "prop-types";
import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          backgroundColor: isDark ? "#333333" : "#e3f2fd",
        }}
      >
        {children}
      </Box>
    </>
  );
}

Main.propTypes = {
  children: node.isRequired,
};
