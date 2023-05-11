import React from "react";
import Map from "./Map";

const MapPage = () => {
  const mapPageStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const textSectionStyle = {
    width: "50%",
  };

  const mapSectionStyle = {
    width: "40%",
    height: "400px", // Adjust as needed
    margin: "20px",
  };

  return (
    <div style={mapPageStyle}>
      <div style={textSectionStyle}>
        <h1>Map Page</h1>
        <p>
          This is some text that will appear next to the map. You can replace
          this text with whatever you want.
        </p>
      </div>
      <div style={mapSectionStyle}>
        <Map
          center={[51.505, -0.09]}
          zoom={13}
          address={"Tel Aviv Hashalom 2"}
        />
      </div>
    </div>
  );
};

export default MapPage;
