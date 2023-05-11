import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function MyForm2() {
  const INITIAL_FORM = {
    firstName: "",
    lastName: "",
  };
  const schema = {
    firstName: Joi.string().max(10),
    lastName: Joi.string().min(2).max(10),
  };

  const [data, setData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  };

  const handleReset = () => {
    setData(INITIAL_FORM);
  };

  const handleCancel = (to) => {
    navigate(to);
  };

  const validateProperty = (target) => {
    const obj = { [target.name]: target.value };
    const joiObj = Joi.object({ [target.name]: schema[target.name] });
    const { error } = joiObj.validate(obj);
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const schemaObj = Joi.object(schema);
    const { error } = schemaObj.validate(data);
    return error ? true : false;
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
        }}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data["firstName"] ? data["firstName"] : ""}
            helperText={errors["firstName"]}
            error={Boolean(errors["firstName"])}
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data["lastName"] ? data["lastName"] : ""}
            helperText={errors["lastName"]}
            error={Boolean(errors["lastName"])}
          />
        </Box>
        <Box>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={() => handleCancel("/")}>Cancel</Button>
          <Button type="submit" disabled={validateForm()}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
