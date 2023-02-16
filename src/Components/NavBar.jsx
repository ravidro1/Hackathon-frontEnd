import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import "./nav-bar.css"

function NavBar(props) {
  const { logout } = useContext(Context);

  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">

        <NavLink to="/ShowAndEditTabel"><button > ShowAndEditTabel </button></NavLink>
        <NavLink to="/DashBoard"><button> DashBoard </button></NavLink>
        <NavLink to="/"><button onClick={logout}>logout</button></NavLink>
      </div>


    </div>
  );
}

export default NavBar;
