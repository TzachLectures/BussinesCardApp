import React from "react";
import ChildComponent from "./ChildComponent";

export default function FatherComponent() {
  return (
    <div>
      <ChildComponent data={"Tzach"}>Dabush</ChildComponent>
    </div>
  );
}
