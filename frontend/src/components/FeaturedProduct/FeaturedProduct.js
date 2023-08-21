import React from 'react';
import './FeaturedProduct.css';

const FeaturedProduct = ({ imageUrl, altText, title, price, sizeOptions, shareUrl }) => {
    return (
      <div className="featured-product">
        <div className="featured-product__image-column">
          <div className="featured-product__image-container">
            <div className="feature-product__image-padding"></div>
            <style>
              {`
                .featured-product__image {
                  object-fit: cover;
                  font-family: "object-fit: cover";
                  background-color: rgba(0,0,0,0);
                }
              `}
            </style>
            <img className="featured-product__image" src={imageUrl} alt={altText} />
          </div>
        </div>

        <div className="featured-product__content-column">
          <div className="featured-product__content-wrapper">
            <div className="featured-product__content-header featured-product__content-header--sharing">
              <h2 className="product__title text-center">{title}</h2>
              <p className="product__price text-center">{price}</p>
            </div>

            <form className="product-form">
              <div className="product-form__item supports-js">
                <label className="single-option-selector__label" htmlFor="Size">Size</label>
                <select id="Size" name="Size" className="single-option-selector">
                  {sizeOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="product-form__item product-form__quantity-selector">
                <label className="product-form__quantity-label" htmlFor="Quantity">Quantity</label>
                <input className="product-form__quantity-input" type="number" id="Quantity" name="quantity" defaultValue="1" />
              </div>

              <button className="btn btn--to-secondary btn--full product__add-to-cart-button" type="submit">
                Add to Cart
              </button>
            </form>

            <div className="featured-product__share-wrapper">
              <a className="product__more-details btn btn--secondary btn--primary-color btn--clear" href={shareUrl}>
                Full details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default FeaturedProduct;
