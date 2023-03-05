import React from "react";
import Child from "./Child";
import DataProvider from "./DataProvider";

export default function Father() {
  return (
    <div>
      <DataProvider>
        <Child />
      </DataProvider>
    </div>
  );
}
