import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;


