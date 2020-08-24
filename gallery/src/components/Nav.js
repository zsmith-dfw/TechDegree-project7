
import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="main-nav">
        <ul>
      <li><NavLink to="/planes">Planes</NavLink></li>
      <li><NavLink to="/trains">Trains</NavLink></li>
      <li><NavLink to="/automobiles">Automobiles</NavLink></li>
        </ul>
      </nav>

    )
}

export default Nav