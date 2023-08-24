import React, { useEffect, useState } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

function Header({ menuOpen, handleBurgerClick }) {
   const [lastScrollPosition, setLastScrollPosition] = useState(0);
   const [shouldShowActions, setShouldShowActions] = useState(true);

   const handleScroll = () => {
      const position = window.pageYOffset;
      setShouldShowActions(position < lastScrollPosition || position === 0);
      setLastScrollPosition(position);
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [lastScrollPosition]);

   return (
      <header className={`header ${shouldShowActions ? 'header--visible' : 'header--hidden'}`}>
         <Nav menuOpen={menuOpen} handleBurgerClick={handleBurgerClick} />
      </header>
   );
}

export default Header;
