import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function Country2({ country }) {
  if (!country) return null;
  return (
    <Box display="flex" sx={{ justifyContent: "space-between" }}>
      <Avatar src={country.flags.png} alt={`${country.name.common} flag`} />
      <Typography sx={{ width: "150px" }}>{country.name.common}</Typography>
      <Typography sx={{ width: "150px" }}>{country.capital?.[0]}</Typography>
    </Box>
  );
}
