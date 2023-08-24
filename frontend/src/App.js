import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentClass, setContentClass] = useState('content--visible');

  const handleBurgerClick = () => {
    if (!menuOpen) {
      setContentClass('content--hidden');
      setTimeout(() => setMenuOpen(true), 500); // 500ms matches the CSS transition duration
    } else {
      setMenuOpen(false);
      setTimeout(() => setContentClass('content--visible'), 500);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Reset when component unmounts
    };
  }, [menuOpen]);

  return (
    <div className='App'>
      <Header menuOpen={menuOpen} handleBurgerClick={handleBurgerClick} />
      <main className={contentClass}>
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;
