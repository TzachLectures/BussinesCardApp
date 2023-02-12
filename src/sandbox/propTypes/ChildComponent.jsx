import { node, string } from "prop-types";
import React from "react";

export default function ChildComponent({ data, children }) {
  return (
    <div>
      {data} {children}
    </div>
  );
}

ChildComponent.propTypes = {
  data: node,
  children: node,
};
