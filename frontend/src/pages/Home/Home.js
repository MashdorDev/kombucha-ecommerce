// Home.js
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import QuoteSlide from "../../components/QuoteSlide/QuoteSlide";
import "./Home.css";

function Home() {
  return (
    <main className="home-content">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <BlogSection />
      <QuoteSlide
        quote="Bought your Red Grape kombucha at the Bean Fiend the other day and it was amazing!"
        author="Victoria Erin"
      />
      <QuoteSlide
        quote="Tried the Gin-Ja and Amy’s Blend and both are delicious!!"
        author="Britt Silegren"
      />
    </main>
  );
}

export default Home;
