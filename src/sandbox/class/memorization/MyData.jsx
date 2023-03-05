import { Button, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import MySpecificData from "./MySpecificData";

export default function MyData() {
  const [counter, setCounter] = useState(0);

  const memoObj = useMemo(() => {
    return {
      text: "HELLO",
    };
  }, []);

  return (
    <div>
      <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
      <Button onClick={() => setCounter((prev) => prev - 1)}>-</Button>
      <Typography>{counter}</Typography>
      <MySpecificData text="hello" data={memoObj} />
      <MySpecificData text="bye" />
    </div>
  );
}
