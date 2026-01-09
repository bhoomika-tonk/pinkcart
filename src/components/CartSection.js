import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CartSection({ onClose }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Dark overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 999
        }}
      />

      {/* Slide-in cart */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '360px',
          background: '#ffe6f0',
          padding: '20px',
          zIndex: 1000,
          boxShadow: '-4px 0 10px rgba(0,0,0,0.15)',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ color: '#ff4d88' }}>Your Cart</h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            ❌
          </button>
        </div>

        {/* Cart items */}
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  padding: '10px',
                  borderRadius: '6px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div>₹{item.price}</div>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: '#ff4d88',
                    color: '#fff',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <h4>Total: ₹{total}</h4>

            {/* ✅ CHECKOUT BUTTON (AMAZON REDIRECT) */}
            <button
              onClick={() => {
                window.location.href = 'https://www.amazon.in';
              }}
              style={{
                width: '100%',
                background: '#ff4d88',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Checkout on Amazon
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default CartSection;
