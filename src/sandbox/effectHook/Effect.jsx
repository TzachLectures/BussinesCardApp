import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Effect() {
  //הצג את הפרטים של כל המדינות
  //שם המדינה..
  const [countries, setCountries] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("fetching...");
    fetch("https://restcountries.com/v3.1/all")
      .then((value) => value.json())
      .then((value) => setCountries(value));
    return () => {
      console.log("Component unMount");
    };
  }, [refresh]);
  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => setRefresh(!refresh)}
      >
        Refresh
      </Button>
      {countries
        ? countries.map((country) => {
            return <Country country={country} key={JSON.stringify(country)} />;
          })
        : "Loading..."}
    </div>
  );
}
