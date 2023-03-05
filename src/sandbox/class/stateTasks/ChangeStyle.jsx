import React, { useState } from "react";

export default function ChangeStyle() {
  const [border, setBorder] = useState(0);
  return (
    <div>
      <div
        style={{
          width: 400,
          height: 400,
          backgroundColor: "red",
          border: border + "px solid black",
        }}
      ></div>
      <input
        type="range"
        value={border}
        onChange={(e) => setBorder(e.target.value)}
      />
    </div>
  );
}
