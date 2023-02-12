import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";

export default function CardPage() {
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <Cards />
      </Container>
    </div>
  );
}
