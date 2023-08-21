import React from 'react';
import './Header.css';
import logo from '../../assets/narrowgate-logo-site.png';
import Nav from "../Nav/Nav";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Narrow Gate Foods" />
            </div>
        <Nav />
        </header>
    );
}

export default Header;
