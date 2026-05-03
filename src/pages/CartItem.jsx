import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../CartSlice';
import './Cart.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.items);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <span className="empty-icon">🌿</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <button className="continue-btn" onClick={() => navigate('/products')}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <p>{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => {
            const itemTotal = (item.cost * item.quantity).toFixed(2);
            return (
              <div key={item.id} className="cart-card">
                <div className="cart-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={e => {
                      e.target.src = 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=150&h=150&fit=crop';
                    }}
                  />
                </div>
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-unit-price">Unit Price: <strong>${item.cost.toFixed(2)}</strong></p>
                  <p className="cart-unit-price">Total Cost: <strong>${itemTotal}</strong></p>
                </div>
                <div className="cart-controls">
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => handleDecrease(item.id)}>−</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                  <p className="cart-item-total">${itemTotal}</p>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>🗑 Delete</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-rows">
            {cart.map(item => (
              <div key={item.id} className="summary-row">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.cost * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => alert('Thank you for your order! 🌿')}>
            Checkout
          </button>
          <button className="continue-btn" onClick={() => navigate('/products')}>
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;