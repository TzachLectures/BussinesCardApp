import { useState } from "react";

export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter((prev) => prev + step);
  };
  const decrement = () => {
    setCounter((prev) => prev - step);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset };
}
