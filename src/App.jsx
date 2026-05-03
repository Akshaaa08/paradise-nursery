import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import ProductList from './pages/ProductList.jsx';
import CartItem from './pages/CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="background-image">
        <div className="landing-content">
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: '0.4rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Welcome to
          </p>
          <h1>Paradise Nursery</h1>
          <p className="tagline">
            Bring nature indoors. Discover our carefully curated collection of aromatic,
            medicinal, and air-purifying houseplants — handpicked for homes that breathe.
          </p>
          <button
            className="get-started-btn"
            onClick={() => navigate('/products')}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="features-strip">
        <div className="feature-item">
          <div className="icon">🌱</div>
          <h3>Hand Selected</h3>
          <p>Every plant is personally chosen for health, beauty, and ease of care.</p>
        </div>
        <div className="feature-item">
          <div className="icon">📦</div>
          <h3>Safe Delivery</h3>
          <p>Plants arrive carefully packaged to ensure they thrive upon arrival.</p>
        </div>
        <div className="feature-item">
          <div className="icon">💚</div>
          <h3>Guaranteed Quality</h3>
          <p>Not happy? We'll replace or refund — no questions asked.</p>
        </div>
        <div className="feature-item">
          <div className="icon">🌿</div>
          <h3>Expert Advice</h3>
          <p>Each plant comes with detailed care guides to help you succeed.</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;