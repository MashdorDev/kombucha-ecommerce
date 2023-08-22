import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/narrowgate-logo-site.png';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart';

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
         <div className='logo'>
            <img src={logo} alt='Narrow Gate Foods' />
         </div>
         <Cart />
      </header>
   );
}

export default Header;
