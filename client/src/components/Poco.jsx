import React from "react";
import "./mainCss.css";
import Header from "./Header.jsx";
import { useState, useEffect } from "react";

//importing for use of Leaflet Map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

//to create map marker icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

//setting state for properties on my restaurant objects
function Poco() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState("");
  const [lat, setLat] = useState(44.468722390587146);
  const [lon, setLon] = useState(-73.2142729594449);

  useEffect(() => {
    fetch("/api/poco")
      .then((response) => {
        return response.json();
      })
      .then((dataArr) => {
        setName(dataArr.name);
        setAddress(dataArr.address);
        setPhone(dataArr.phone);
        setHours(dataArr.hours);
        setNotes(dataArr.notes);
        setLat(dataArr.latitude);
        setLon(dataArr.longitude);
        console.log(dataArr.name)
      });
  }, []);

  return (
    <>
      <div>
        <Header />
        <span className="Info">
        <h1 id="restName">
        <b><i>{name}</i></b>
        </h1>
        <ul id="restInfo">
          <li><b>Hours:</b> {hours}</li> 
          <li><b>Address:</b>{address}</li>
          <li><b>Phone:</b>{phone}</li>
          <li><b>Notes:</b>{notes}</li>
        </ul>
        </span>
        <MapContainer
          className="restMap"
          center={[lat, lon]}
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
          {/*Set the marker position for Poco */}
          <Marker position={[lat, lon]} icon={DefaultIcon}>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Poco;
