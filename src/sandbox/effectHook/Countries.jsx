import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Country2 from "./Country2";

export default function Countries() {
  //יש לייבא את כל המדינות מהרסט אייפיאיי שעבדנו איתו בעבר
  //ולהציג את התוצאה בלוג
  const [countries, setCountries] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // const getData = async () => {
    //   let result = await fetch("https://restcountries.com/v3.1/all");
    //   result = await result.json();
    //   setCountries(result);
    // };
    // getData();

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
            return <Country2 country={country} key={JSON.stringify(country)} />;
          })
        : "Loading..."}
    </div>
  );
}
