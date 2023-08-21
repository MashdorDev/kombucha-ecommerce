import React from 'react';
import './Header.css';
import favicon from '../../assets/narrowgate-logo-site.png';

function Header() {
    return (
        <header className="header">
            {/* #eb4f47 */}
            <title>Narrow Gate Foods - Kombucha, Kimchi, Water Kefir, and Sauerkraut</title>


            <div className="logo">

                <img src={favicon} alt="Kombucha Logo" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
