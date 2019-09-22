import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
    return (
        <div>
            <nav className="navbar-nav">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <NavLink activeClassName='active' to="/"><button className="btn btn-secondary">Home</button></NavLink>
                    <NavLink activeClassName='active' to="/about"><button className="btn btn-secondary">About</button></NavLink>
                    <NavLink activeClassName='active' to="contact"><button className="btn btn-secondary">Contact</button></NavLink>
                    <NavLink activeClassName='active' to="/projects"><button className="btn btn-secondary">Projects</button></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;