import React, { memo } from "react";
import Typography from "@mui/material/Typography";

export default memo(function MySpecificData({ text, data }) {
  console.log("component " + text);

  let result = text;
  if (data) {
    result = data.text;
  }
  return <Typography>{result}</Typography>;
});
