import React from 'react';

import './style.css';

import { NavLink, useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    return (
        <nav>
            <section className="page-links">
                <NavLink exact to="/" activeClassName="current" className="navlink">Home</NavLink>
                <NavLink to="/repopage" activeClassName="current" className="navlink">Repo Info</NavLink>
            </section>
            <section className="history-links">
                <button id="back-button" onClick={history.goBack}>Go back</button>
                <button id="forward-button" onClick={history.goForward}>Go forward</button>            
            </section>
        </nav>
    )
}

export default NavBar;