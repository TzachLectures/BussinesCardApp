import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Password() {
  const [score, setScore] = useState(0);
  const [pass, setPass] = useState("");
  const calcPoints = () => {
    let s = 0;
    let lower = false;
    let upper = false;
    let special = false;
    let number = false;
    if (pass.length >= 6 && pass.length <= 12) {
      s += 1;
    }
    for (let index = 0; index < pass.length; index++) {
      if (pass[index] >= "a" && pass[index] <= "z") {
        lower = true;
      }
      if (pass[index] >= "A" && pass[index] <= "Z") {
        upper = true;
      }
      if (pass[index] >= "0" && pass[index] <= "9") {
        number = true;
      }
      if ("!@#$%".includes(pass[index])) {
        special = true;
      }
    }
    if (lower && upper) {
      s += 3;
    }
    if (number) {
      s += 2;
    }
    if (special) {
      s += 5;
    }
    return s;
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    setScore(calcPoints());
  };
  return (
    <>
      <TextField
        label="Password"
        variant="outlined"
        onChange={(e) => handlePass(e)}
      />
      <Typography>The score is {score}</Typography>
    </>
  );
}
