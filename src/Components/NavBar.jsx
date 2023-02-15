import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../App';

function NavBar(props) {
    const { logout } = useContext(Context);

    return (
        <div>
            <button onClick={logout}> logout </button>
            <NavLink to="/ShowAndEditTabel">SH</NavLink>
        </div>
    );
}

export default NavBar;