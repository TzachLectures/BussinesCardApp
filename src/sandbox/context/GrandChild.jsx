import React from "react";
import { useData } from "./DataProvider";

export default function GrandChild() {
  let data = useData();
  return <div>{JSON.stringify(data)}</div>;
}
