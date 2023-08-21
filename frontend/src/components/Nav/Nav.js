import React from "react";
import './Nav.css'
function Nav() {
  return (
    <nav className="navbar">
      <ul>
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
