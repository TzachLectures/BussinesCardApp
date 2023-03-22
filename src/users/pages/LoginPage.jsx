import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import ROUTES from "../../routes/routesModel";

import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { user } = useUser();
  const { handleLogin } = useUsers();
  //איך אנחנו בונים טופס עם הכלים שבנינו בשיעור קודם
  //החלק הלוגי:
  //נשתמש בהוק יוזפורם

  //החלק הויזואלי
  //נשתמש בקומפוננטת טופס שיצרנו
  //ונכניס לתוכה קומפוננטות אינפוט שיצרנו

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can Log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.CARDS}
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={value.errors.password}
            onChange={rest.handleChange}
            data={value.data}
          />
        </Form>
      </Container>
    </Container>
  );
}
