import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='App'>
      <Header menuOpen={menuOpen} handleBurgerClick={handleBurgerClick} />
      <main className={`content ${menuOpen ? 'content--hidden' : ''}`}>
        <Home />
      <Footer />
      </main>
    </div>
  );
}

export default App;
