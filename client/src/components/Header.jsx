// Importing React, Stylesheet, and Link from react router
import React from "react";
import "./mainCss.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Renders a link to the homepage on each restaurant's page */}
      <p id="homeLink">
        <Link to="/home">Home</Link>
      </p>
    {/* Renders the title, "Yelpington" with a rounded line directly beneath it on each page */}
      <h1 id="pageHeader">
        Yelpington<i>!</i>
        <hr class="roundedLine"></hr>
      </h1>
    </div>
  );
}

export default Header;
