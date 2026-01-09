import React, { useContext } from 'react';
import './Product.css';
import { CartContext } from '../CartContext';

function Product({ title, price, image, link }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>

      <h4>{title}</h4>
      <p>₹{price}</p>

      <button onClick={() => addToCart({ title, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
