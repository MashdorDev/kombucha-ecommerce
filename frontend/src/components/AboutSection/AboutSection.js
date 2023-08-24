// AboutSection.js
import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about outline">
    <h2>Small batch, big love.</h2>
    <p className="outline">
      Inspired to share the gut-happy goodness with the world, each of our
      products comes from many years of trying different flavours and
      selecting our favourites. Hand made in small batches, using only the
      finest ingredients... taking the small, and perhaps unusual way is
      what leads us to high quality.
    </p>
    <a href="/about" className='btn'>Learn More About us</a>
  </section>
  );
}

export default AboutSection;
