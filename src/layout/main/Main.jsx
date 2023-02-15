import { Box } from "@mui/material";
import { node } from "prop-types";
import React from "react";

export default function Main({ children }) {
  return (
    <>
      <Box sx={{ minHeight: "85vh", backgroundColor: "#e3f2fd" }}>
        {children}
      </Box>
    </>
  );
}

Main.propTypes = {
  children: node.isRequired,
};
