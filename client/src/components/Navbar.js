import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';



export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Siniakou Alex</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#intro">Введение</a></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    {/* <li><a href="/" onClick={logoutHandler}>Выйти</a></li> */}
                </ul>
            </div>
        </nav>
    )
}
