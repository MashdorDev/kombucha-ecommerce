// Home.js
import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import QuoteSlide from '../../components/QuoteSlide/QuoteSlide';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import SlideShow from '../../components/SlideShow/SlideShow';
import './Home.css';

function Home() {
   return (
      <main >
         <SlideShow  />
         <AboutSection />
         <BlogSection  />
         <QuoteSlide />
         <FeaturedProduct
            imageUrl='//narrowgatefoods.com/cdn/shop/products/DSC7789_2_300x.jpg?v=1619017385'
            altText='Gin-ja Booch'
            title='Gin-ja Booch'
            price='$7 per bottle'
            sizeOptions={['355ml', '750ml Growler']}
            shareUrl='https://narrowgatefoods.com/products/gin-ja-booch?variant=32850816008239'
         />
      </main>
   );
}

export default Home;
