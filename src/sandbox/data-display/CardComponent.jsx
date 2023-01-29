import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardComponent() {
  return (
    <div>
      <Card sx={{ width: 250, m: 2 }} raised square>
        <CardHeader title="Card Title" subheader="Subtitle"></CardHeader>

        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="assets/images/examplePic.jpg"
          />
          <CardContent>
            <Typography>Card Content</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
