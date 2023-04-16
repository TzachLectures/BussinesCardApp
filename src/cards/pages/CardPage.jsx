import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import Spinner from "./../../components/Spinner";
import Error from "./../../components/Error";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { cards, error, isLoading } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={cards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
