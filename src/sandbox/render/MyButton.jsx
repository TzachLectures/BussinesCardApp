import { Button } from "@mui/material";
import React, { memo } from "react";

function MyButton({ children, handleClick }) {
  console.log("My button is rendered " + children);
  return (
    <Button onClick={handleClick} variant="outlined">
      {children}
    </Button>
  );
}

export default memo(MyButton);
