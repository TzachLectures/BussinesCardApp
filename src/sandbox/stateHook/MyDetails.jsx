import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MyDetails() {
  const [person, setPerson] = useState({
    firstName: "Tzach",
    lastName: "Dabush",
  });

  return (
    <>
      <Typography>{person.firstName}</Typography>
      <Typography>{person.lastName}</Typography>
      <TextField
        label="First Name"
        variant="outlined"
        onChange={(e) => {
          setPerson({ ...person, firstName: e.target.value });
        }}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        onChange={(e) => {
          setPerson({ ...person, lastName: e.target.value });
        }}
      />
    </>
  );
}

//הגדירו סטייט המכיל אובייקט ובו שם פרטי ושם משפחה
//הציגו בדף:
//2 טיפוגרפי לשם פרטי ושם משפחה
//2 Text Field לעדכון שם פרטי ושם משפחה
