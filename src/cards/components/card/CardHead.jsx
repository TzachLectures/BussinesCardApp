import { CardMedia } from "@mui/material";
import React from "react";

export default function CardHead({ image }) {
  return (
    <CardMedia component="img" height="140" image={image.url} alt={image.alt} />
  );
}
