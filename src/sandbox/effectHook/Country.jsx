import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function Country({ country }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 5,
        }}
      >
        <Avatar
          alt={`${country.name.common} flage image`}
          src={country.flags.png}
        />
        <Typography sx={{ width: 150 }}>{country.name.common}</Typography>
        <Typography sx={{ width: 150 }}>{country.capital?.[0]}</Typography>
      </Box>
    </>
  );
}
