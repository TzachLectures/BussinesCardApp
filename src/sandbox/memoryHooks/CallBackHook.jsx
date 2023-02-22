import { Box, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import BtnComp from "./BtnComp";

export default function CallBackHook() {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(0);

  const addHeight = useCallback(() => setHeight(height + 1), [height]);
  const addAge = useCallback(() => setAge(age + 1), [age]);

  return (
    <>
      <Box>
        <Typography>The age is {age}</Typography>
        <Typography>The height is {height}</Typography>
        <BtnComp handleClick={addAge}>Add age</BtnComp>
        <BtnComp handleClick={addHeight}>Add Height</BtnComp>
      </Box>
    </>
  );
}
