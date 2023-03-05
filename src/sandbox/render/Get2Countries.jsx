import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import CountryDetails from "./CountryDetails";

export default function Get2Countries() {
  const [country1Details, setCountry1Details] = useState("");
  const [country2Details, setCountry2Details] = useState("");
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const countryName1 = useRef();
  const countryName2 = useRef();

  const updateCountry1 = () => {
    setCountry1Details(country1);
    // setCountry1Details(countryName1.current.value);
  };

  const updateCountry2 = () => {
    setCountry2Details(country2);
    // setCountry2Details(countryName2.current.value);
  };

  return (
    <div>
      <TextField onChange={(e) => setCountry1(e.target.value)} />
      {/* <TextField inputRef={countryName1} /> */}
      <Button onClick={updateCountry1}>show details 1</Button>
      <CountryDetails countryName={country1Details} />
      <TextField onChange={(e) => setCountry2(e.target.value)} />
      {/* <TextField inputRef={countryName2} /> */}
      <Button onClick={updateCountry2}>show details 1</Button>
      <CountryDetails countryName={country2Details} />
    </div>
  );
}
