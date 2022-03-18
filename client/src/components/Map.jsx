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

function Map(props) {
 //Variables for each restaurant icon
  let markerDedalus = [44.468722390587146, -73.2142729594449];
  let markerFarmhouse = [44.47854842725688, -73.21328354410184];
  let markerShyGuy = [44.4674988584091, -73.20997489992381];
  let markerPoco = [44.475795300698366, -73.21751989992366];
  let markerHoneyRoad = [44.475795300698366, -73.21751989992366];
  let markerRedPanda = [44.476290910282735, -73.21234073245874];
  let markerPhoHong = [44.48904593154769, -73.20704281526592];
  let markerSkinnyPancake = [44.478382666090916, -73.21968593603044];

  return (
    <div>
      <MapContainer
        className="mapContainer"
        //passing props from home page
        center={props.center}
        zoom={13}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "600px",
          width: "600px",
          zIndex: "1",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/*Set the marker positions for each restaurant
        Create a popup with url link to each unique page */}
        <Marker position={markerDedalus} icon={DefaultIcon}>
          <Popup>
            <Link to="/dedalus">Dedalus</Link>
          </Popup>
        </Marker>

        <Marker position={markerFarmhouse} icon={DefaultIcon}>
          <Popup>
            <Link to="/farmhouse">Farm House Tap & Grill</Link>
          </Popup>
        </Marker>

        <Marker position={markerShyGuy} icon={DefaultIcon}>
          <Popup><Link to="/shy-guy">Shy Guy Gelato</Link></Popup>
        </Marker>

        <Marker position={markerPoco}>
          <Popup><Link to="/poco">Poco</Link></Popup>
        </Marker>

        <Marker position={markerHoneyRoad}>
          <Popup><Link to="/honey-road">Honey Road</Link></Popup>
        </Marker>

        <Marker position={markerRedPanda}>
          <Popup><Link to="/red-panda">Red Panda</Link></Popup>
        </Marker>

        <Marker position={markerPhoHong}>
          <Popup><Link to="/pho-hong">Pho Hong </Link></Popup>
        </Marker>

        <Marker position={markerSkinnyPancake}>
          <Popup><Link to="/skinny-pancake">Skinny Pancake</Link></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
