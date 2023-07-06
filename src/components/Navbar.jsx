import React from "react";
import logo from "../assets/cropped-logo-sansfond-2.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <ul>
        <li>Documentaires</li>
        <li>
          <NavLink to={"/prestations"}>Prestations</NavLink>
        </li>
        <li>
          <NavLink to={"/a-propos"}>À propos</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
