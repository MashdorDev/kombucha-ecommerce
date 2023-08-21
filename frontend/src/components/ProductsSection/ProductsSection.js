// ProductsSection.js
import React from "react";

function ProductsSection() {
  return (
    <section className="products">
    <div className="product-list">
      <div className="product">
        <h3>Kombucha</h3>
        <a href="/products/kombucha">View Products</a>
      </div>
      <div className="product">
        <h3>Kimchi</h3>
        <a href="/products/kimchi">View Products</a>
      </div>
      <div className="product">
        <h3>Sauerkraut</h3>
        <a href="/products/sauerkraut">View Products</a>
      </div>
      <div className="product">
        <h3>Water Kefir</h3>
        <a href="/products/water-kefir">View Products</a>
      </div>
    </div>
  </section>
  );
}

export default ProductsSection;
