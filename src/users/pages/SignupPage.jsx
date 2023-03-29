import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";

export default function SignupPage() {
  const { handleSignup } = useUsers();

  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  const { user } = useUser();

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="register form"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
    </Container>
  );
}
