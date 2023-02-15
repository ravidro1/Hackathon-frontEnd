import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Context} from "../App";

function NavBar(props) {
  const {logout} = useContext(Context);

  return (
    <div>
      <button onClick={logout}> logout </button>
      <NavLink to="/ShowAndEditTabel">ShowAndEditTabel</NavLink>
      <br />
      <NavLink to="/DashBoard">DashBoard</NavLink>
    </div>
  );
}

export default NavBar;
