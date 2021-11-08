import React from "react";
import "./mainCss.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <p id="homeLink">
        <Link to="/home">Home</Link>
      </p>
      <h1 id="pageHeader">
        Yelpington<i>!</i>
        <hr class="roundedLine"></hr>
      </h1>
    </div>
  );
}

export default Header;
