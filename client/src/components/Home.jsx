import React from "react";
import "./mainCss.css";
import Map from "./Map.jsx";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import { useState, useEffect } from "react";

function Home() {
  // start location for map is downtown burlington (coordinates for City Hall)
  const [center, setCenter] = useState([44.47678261143469, -73.21307293440256]);
  //zoom is not working quite yet
  const [zoom, setZoom] = useState(25);

  return (
    <div>
      <h1 id="pageHeader">
        Yelpington<i>!</i>
        <hr class="roundedLine"></hr>
      </h1>
      <NavBar />
      <Map center={center} zoom={zoom} />
    </div>
  );
}

export default Home;
