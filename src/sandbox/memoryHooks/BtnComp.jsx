import { Button } from "@mui/material";
import React, { memo } from "react";

function BtnComp({ handleClick, children }) {
  console.log("The btn comp is render " + children);
  return (
    <>
      <Button onClick={handleClick}>{children}</Button>
    </>
  );
}

export default memo(BtnComp);
