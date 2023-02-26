import React, { useState } from "react";

export default function Counter2() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
