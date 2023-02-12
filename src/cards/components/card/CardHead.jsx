import { CardMedia } from "@mui/material";
import React from "react";
import imgType from "../../models/types/imgType";

export default function CardHead({ image }) {
  return (
    <CardMedia component="img" height="140" image={image.url} alt={image.alt} />
  );
}

CardHead.propTypes = {
  image: imgType.isRequired,
};
