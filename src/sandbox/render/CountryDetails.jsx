import React, { memo, useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default memo(function CountryDetails({ countryName }) {
  const [country, setCountry] = useState(null);
  const getDetails1 = async (countryName) => {
    let result = await fetch(
      "https://restcountries.com/v3.1/name/" + countryName
    );
    result = await result.json();
    return result[0];
  };

  useEffect(() => {
    if (countryName != "") {
      getDetails1(countryName)
        .then((value) => {
          setCountry(value);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countryName]);

  console.log("this components rendered " + countryName);
  if (!country) return null;
  return (
    <Box display="flex" sx={{ justifyContent: "space-between" }}>
      <Avatar src={country.flags.png} alt={`${country.name.common} flag`} />
      <Typography sx={{ width: "150px" }}>{country.name.common}</Typography>
      <Typography sx={{ width: "150px" }}>{country.capital?.[0]}</Typography>
    </Box>
  );
});
