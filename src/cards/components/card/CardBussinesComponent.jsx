import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

export default function CardBussinesComponent() {
  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="assets/images/business-card-top-image.jpg"
            alt="image1"
          />
          <CardHeader title="First" subheader="subtitle" />
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <strong>Phone: </strong>050-0000000
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Address: </strong>Tel Aviv Hashalom 8
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Card Number: </strong>111111
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="Delete Card">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit Card">
              <ModeEditIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton aria-label="Call">
              <CallIcon />
            </IconButton>
            <IconButton aria-label="Add to favorite">
              <FavoriteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
