import React, { useContext } from 'react';
import { Context } from '../App';

function NavBar(props) {
    const {logout} = useContext(Context);

    return (
        <div>
            <button onClick={logout}> logout </button>
        </div>
    );
}

export default NavBar;