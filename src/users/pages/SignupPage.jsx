import { Container } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";

export default function SignupPage() {
  const user = true;
  const navigate = useNavigate();

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container>
      <PageHeader
        title="Welcome to signup page"
        subtitle="here you can register"
      />
    </Container>
  );
}
