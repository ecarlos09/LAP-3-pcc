import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/repopage" activeClassName="current">Repo Info</NavLink>
            <button id="back-button" onClick={history.goBack}>Go back</button>
            <button id="forward-button" onClick={history.goForward}>Go forward</button>
        </nav>
    )
}

export default NavBar;