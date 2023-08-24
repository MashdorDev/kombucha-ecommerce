import React, { useState } from 'react';
import ProductViewer from './ProductViewer'; // Make sure to import the ProductViewer component
import './ProdutsSection.css';

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="products">
      <ProductViewer product={selectedProduct} />
      <div className="product-list">
        <div className="product">
          <h3 onClick={() => handleProductClick('kombucha')}>Kombucha</h3>
          <a href="/products/kombucha" >View Products</a>
        </div>
        <div className="product">
          <h3 onClick={() => handleProductClick('kimchi')}>Kimchi</h3>
          <a href="/products/kimchi" >View Products</a>
        </div>
        <div className="product">
          <h3  onClick={() => handleProductClick('sauerkraut')}>Sauerkraut</h3>
          <a href="/products/sauerkraut">View Products</a>
        </div>
        <div className="product">
          <h3 onClick={() => handleProductClick('water-kefir')}>Water Kefir</h3>
          <a href="/products/water-kefir" >View Products</a>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
