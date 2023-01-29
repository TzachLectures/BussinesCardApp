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
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

export default function CardBussinesComponent() {
  const card = {
    _id: "eafeswfwr2326346tf3254f",
    title: "first",
    subtitle: "subTitle",
    description: "testing",
    phone: "050-1111111",
    email: "text@text.com",
    web: "https://www.test.co.il",
    image: {
      url: "assets/images/business-card-top-image.jpg",
      alt: "image",
    },
    address: {
      state: "TLV",
      country: "Israerl",
      street: "Dizingof",
      houseNumber: 1,
      city: "Tel Aviv",
      zip: 1312,
    },
    bizNumber: 1111111,
    likes: [],
    user_id: "4235234234mfnjrb2h3vbry23",
  };
  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea>
          <CardHead image={card.image} />
          <CardBody
            title={card.title}
            subtitle={card.subtitle}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
          />
        </CardActionArea>
        <CardActionBar />
      </Card>
    </>
  );
}
