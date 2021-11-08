import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useEffect } from "react";
import "./mainCss.css";
import { Link } from "react-router-dom";

//to create icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function PageMap(props) {
  return (
    <div>
      <MapContainer
        className="mapContainer"
        //passing props from home page
        zoom={13}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "500px",
          width: "500px",
          zIndex: "1",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
export default PageMap;
