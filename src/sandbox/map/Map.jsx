import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = ({ center, zoom, address }) => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState(center);

  useEffect(() => {
    const fetchGeoCode = async () => {
      // If address is provided, use it to fetch coordinates
      if (address) {
        // Replace spaces with '+' for URL
        const formattedAddress = address.replace(/ /g, "+");

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${formattedAddress}`
        );
        const data = await response.json();

        if (data[0]) {
          setCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      }
    };

    fetchGeoCode();
  }, [address]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }

    mapRef.current = L.map("map", {
      center: coordinates,
      zoom: zoom,
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    let defaultIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerIconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    L.marker(coordinates, { icon: defaultIcon }).addTo(mapRef.current);
  }, [coordinates, zoom]);

  return <div id="map" style={{ height: "100%", width: "100%" }} />;
};

export default Map;
