import { Button, TextField } from "@mui/material";
import React from "react";

export default function OnClickEvent({ handleClick }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Button onClick={() => handleClick("somthing")}>Click here</Button>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleChange}
      />
    </>
  );
}
