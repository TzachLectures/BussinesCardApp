import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Countries() {
  //יש לייבא את כל המדינות מהרסט אייפיאיי שעבדנו איתו בעבר
  //ולהציג את התוצאה בלוג
  const [countries, setCountries] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("fetching....");
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, [refresh]);

  return (
    <div>
      <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
      {countries
        ? countries.map((country, i) => {
            return (
              <Box
                display="flex"
                sx={{ justifyContent: "space-between" }}
                key={JSON.stringify(country)}
              >
                <Avatar
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                />
                <Typography sx={{ width: "150px" }}>
                  {country.name.common}
                </Typography>
                <Typography sx={{ width: "150px" }}>
                  {country.capital?.[0]}
                </Typography>
              </Box>
            );
          })
        : "Loading..."}
    </div>
  );
}
