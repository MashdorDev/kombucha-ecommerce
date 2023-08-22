import React from 'react';
import './BurgerIcon.css';

function BurgerIcon({ isOpen }) {
   return (
      <div id='burgerIcon' className={isOpen ? 'open' : ''}>
         <span className={`burger-icon burger-icon--top ${isOpen ? 'open' : ''}`}></span>
         <span className={`burger-icon burger-icon--mid ${isOpen ? 'open' : ''}`}></span>
         <span className={`burger-icon burger-icon--bottom ${isOpen ? 'open' : ''}`}></span>
      </div>
   );
}

export default BurgerIcon;
