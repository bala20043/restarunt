import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { to:'/', label:'Home' },
    { to:'/menu', label:'Menu' },
    { to:'/order', label:'Order' },
    { to:'/reservations', label:'Reservations' },
    { to:'/offers', label:'Deals' },
    { to:'/locations', label:'Locations' },
    { to:'/about', label:'About' },
    { to:'/contact', label:'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
        <div className="navbar-inner container">
          <Link to="/" className="navbar-logo" id="nav-logo">
            <span className="logo-icon">🔥</span>
            <span className="logo-text">Flame<span className="logo-accent">Grill</span></span>
          </Link>

          <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {links.map(link => (
              <Link key={link.to} to={link.to} className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <Link to="/order" className="nav-cart" id="nav-cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <Link to="/order" className="btn btn-primary btn-sm nav-order-btn" id="nav-order-btn">Order Now</Link>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} id="hamburger-btn" aria-label="Toggle menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)}/>}
    </>
  );
}
