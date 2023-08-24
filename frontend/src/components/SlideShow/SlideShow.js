import React from 'react';
import './SlideShow.css';
import ProductsSection from '../ProductsSection/ProductsSection';
import HeroSection from '../HeroSection/HeroSection';

function SlideShow() {
   return (
      <div className='slideshow'>
         <HeroSection className='hero' />
         <ProductsSection />
      </div>
   );
}

export default SlideShow;
