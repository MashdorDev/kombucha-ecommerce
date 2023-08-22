import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  // State variable to toggle the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle the burger button click
  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="site-header__navigation">
        <button className="btn--clear btn--square" onClick={handleBurgerClick}>
          <span className="burger-icon burger-icon--top"></span>
          <span className="burger-icon burger-icon--mid"></span>
          <span className="burger-icon burger-icon--bottom"></span>
        </button>
      </div>
      <ul className={`menu ${menuOpen ? "menu--open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">our products</a>
        </li>
        <li>
          <a href="/where">Where to buy</a>
        </li>
        <li>
          <a href="/blog">Narrow Gate Blog</a>
        </li>
        <li>
          <a href="/about">about us</a>
        </li>
        <li>
          <a href="/contact">contact us</a>
        </li>
        <li>
          <a href="/login">log in</a>
        </li>
        <li>
          <a href="/register">Create account</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
