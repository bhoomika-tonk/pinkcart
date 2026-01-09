import React, { useContext } from 'react';
import './Header.css';
import { CartContext } from '../CartContext';

function Header({ onCartClick, onSearch }) {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h2>PinkCart</h2>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <button
        onClick={onCartClick}
        className="cart"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        🛒 Cart ({cart.length})
      </button>
    </header>
  );
}

export default Header;
