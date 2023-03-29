import { Grid, Typography } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";

export default function Cards({ cards }) {
  const handleDelete = (id) => {
    console.log(`Card ${id} is deleted`);
  };
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  const handleLike = (id) => {
    console.log(`Card ${id} is Liked`);
  };
  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLike={handleLike}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
