import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
