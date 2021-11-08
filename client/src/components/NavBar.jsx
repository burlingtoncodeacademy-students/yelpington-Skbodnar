import React from "react";
import "./mainCss.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="restButtons">
      <span id="buttons">
        <Link to="/dedalus">Dedalus</Link>
      </span>

      <span id="buttons">
        <Link to="/farmhouse">Farmhouse</Link>
      </span>

      <span id="buttons">
        <Link to="/honey-road">Honey Road</Link>
      </span>

      <span id="buttons">
        <Link to="/pho-hong">Pho Hong </Link>
      </span>

      <span id="buttons">
        <Link to="/poco">Poco</Link>
      </span>

      <span id="buttons">
        <Link to="/red-panda">Red Panda</Link>
      </span>

      <span id="buttons">
        <Link to="/shy-guy">Shy Guy</Link>
      </span>

      <span id="buttons">
        <Link to="/skinny-pancake">Skinny Pancake</Link>
      </span>
    </div>
  );
}

export default NavBar;
