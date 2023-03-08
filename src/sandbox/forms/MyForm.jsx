import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MyForm() {
  const INITIAL_VALUE = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(INITIAL_VALUE);

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleReset = () => {
    setData(INITIAL_VALUE);
  };
  return (
    <Box>
      <Box>
        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
          value={data["email"]}
        />
        <TextField
          label="Password"
          name="password"
          onChange={handleChange}
          value={data["password"]}
        />
      </Box>

      <Button onClick={handleReset}>Reset</Button>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </Box>
  );
}
