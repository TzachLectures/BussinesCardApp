import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function FirstEffect() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("Hello");
    return () => {
      console.log("This first effect component is unMount");
    };
  }, []);

  useEffect(() => {
    console.log("first effect runing");
  }, [first]);

  //יש לייבא את המידע על כל המדינות
  //מה API
  //שעבדנו איתו בעבר ולהציג בלוג.

  //הוסף כפתור שבלחיצה עליו כל המידע ייובא שוב

  return (
    <>
      <Typography variant="body1" color="initial">
        {first}
      </Typography>
      <Typography variant="body1" color="initial">
        {second}
      </Typography>

      <Button onClick={() => setFirst(first + 1)}>indrement first</Button>
      <Button onClick={() => setSecond(second + 1)}>indrement second</Button>
    </>
  );
}
