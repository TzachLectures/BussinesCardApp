import React from "react";
import OnClickEvent from "./OnClickEvent";

export default function FatherComponentEvent() {
  const handleClick = (text) => {
    console.log("btn Clicked father function with text " + text);
  };

  return (
    <>
      Text from father
      <OnClickEvent handleClick={handleClick} />
    </>
  );
}
