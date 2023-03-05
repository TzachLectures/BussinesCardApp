import { useState } from "react";

export default function useAlert() {
  const [showAlert, setShowAlert] = useState(false);
  function handleAlert() {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  }
  return [showAlert, handleAlert];
}
