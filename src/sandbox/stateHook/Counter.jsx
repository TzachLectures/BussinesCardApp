import { Button } from "@mui/material";
import React, { useState } from "react";

export default function Counter() {
  ////destructuring reminder
  // let arr = [1, 2, 3, 4];
  // let obj = { firstName: "Tzach", lastName: "Dabush" };
  // let [first, second, third, forth] = arr;
  // let { firstName, lastName } = obj;
  // console.log(firstName);

  const [counter, setCounter] = useState(0);

  const handleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Minimum value is 0");
    }
  };

  return (
    <>
      <p>The number is {counter}</p>
      <Button
        variant="outlined"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment +
      </Button>
      <Button variant="outlined" onClick={handleDec}>
        Decrement -
      </Button>
    </>
  );
}
