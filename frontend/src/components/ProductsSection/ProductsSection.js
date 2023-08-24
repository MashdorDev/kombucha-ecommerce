import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import if using React Router
import ProductViewer from './ProductViewer';
import './ProdutsSection.css';

// Individual product component
const Product = ({ product, isSelected, onSelect }) => (
  <div
    className={`product btn ${isSelected ? 'product-selected' : ''}`}
    onClick={() => onSelect(product.path)}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === 'Enter' && onSelect(product.path)}
    key={product.path}
  >
    <h3>{product.name}</h3>
    <a href={`/products/${product.path}`}>View Products</a>
  </div>
);

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: 'Kombucha', path: 'kombucha' },
    { name: 'Kimchi', path: 'kimchi' },
    { name: 'Sauerkraut', path: 'sauerkraut' },
    { name: 'Water Kefir', path: 'water-kefir' },
  ];

  return (
    <section className="products">
      <ProductViewer product={selectedProduct} />
      <div className="product-list">
        {products.map((product) => (
          <Product
            product={product}
            isSelected={selectedProduct === product.path}
            onSelect={setSelectedProduct}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
