import React from "react";
import useAlert from "./useAlert";

export default function ShowAlert() {
  const [showAlert, handleAlert] = useAlert();
  return (
    <div>
      {showAlert && <h1>This is the alert!!!!</h1>}
      <button onClick={handleAlert}>Show Alert</button>
    </div>
  );
}
