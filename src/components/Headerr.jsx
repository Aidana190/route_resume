import React from "react";
import { NavLink } from "react-router-dom";
import Footerr from "./Footerr";
const Headerr = () => {
  return (
    <div>
      <header>
        <span class="logo">Aidana.B</span>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/photo">Photography </NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Headerr;
