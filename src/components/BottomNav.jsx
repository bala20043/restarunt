import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './BottomNav.css';

export default function BottomNav() {
  const location = useLocation();
  const { cartCount } = useCart();
  const items = [
    { to:'/', label:'Home', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { to:'/menu', label:'Menu', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 3v18"/></svg> },
    { to:'/order', label:'Cart', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>, badge:cartCount },
    { to:'/about', label:'Profile', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  ];

  return (
    <nav className="bottom-nav" id="bottom-nav">
      {items.map(item => (
        <Link key={item.to} to={item.to} className={`bottom-nav-item ${location.pathname === item.to ? 'active' : ''}`}>
          <span className="bottom-nav-icon">
            {item.icon}
            {item.badge > 0 && <span className="bottom-nav-badge">{item.badge}</span>}
          </span>
          <span className="bottom-nav-label">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
