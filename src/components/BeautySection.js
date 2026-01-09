import React from 'react';
import Product from './Product';
import './BeautySection.css';

function BeautySection({ title, products }) {
  return (
    <div className="beauty-section">
      <h2>{title}</h2>

      <div className="beauty-products">
        {products.map((item, index) => (
          <Product
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default BeautySection;
