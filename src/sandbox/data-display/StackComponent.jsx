import { Box, Divider, Stack } from "@mui/material";
import React from "react";

export default function StackComponent() {
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box>one</Box>
      <Box>two</Box>
      <Box>three</Box>
    </Stack>
  );
}
