import React from 'react';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import logo from '../../assets/narrowgate-logo-site.png';
import Cart from '../Cart/Cart';
import './Nav.css';

function Nav({ menuOpen, handleBurgerClick }) {
   return (
      <nav className='navbar'>
         <button className='btn--clear btn--square' onClick={handleBurgerClick}>
            <BurgerIcon isOpen={menuOpen} />
         </button>
         <div className={` ${menuOpen ? 'background--open' : 'background'}`}>
            <ul className={`${menuOpen ? 'menu--open' : 'menu--closed'}`}>
               <li>
                  <a href='/'>Home</a>
               </li>
               <li>
                  <a href='/products'>our products</a>
               </li>
               <li>
                  <a href='/where'>Where to buy</a>
               </li>
               <li>
                  <a href='/blog'>Narrow Gate Blog</a>
               </li>
               <li>
                  <a href='/about'>about us</a>
               </li>
               <li>
                  <a href='/contact'>contact us</a>
               </li>
               <li>
                  <a href='/login'>log in</a>
               </li>
               <li>
                  <a href='/register'>Create account</a>
               </li>
            </ul>
         </div>
         <div className='logo'>
            <img src={logo} alt='Narrow Gate Foods' />
         </div>
         <Cart/>
      </nav>
   );
}

export default Nav;
