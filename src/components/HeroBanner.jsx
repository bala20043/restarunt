import { Link } from 'react-router-dom';
import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero" id="hero-banner">
      <div className="hero-bg">
        <img src="/images/hero-burger.png" alt="Flame-grilled burger" className="hero-bg-img" loading="eager" />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge animate-fade-in-up">🔥 #1 Fast Food in Town</span>
          <h1 className="hero-title animate-fade-in-up" style={{animationDelay:'0.15s'}}>
            Flame-Grilled<br/><span className="gradient-text">Perfection</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up" style={{animationDelay:'0.3s'}}>
            Bold flavors, juicy burgers, and crispy sides — crafted with fire and served with passion.
          </p>
          <div className="hero-actions animate-fade-in-up" style={{animationDelay:'0.45s'}}>
            <Link to="/order" className="btn btn-primary btn-lg" id="hero-order-btn">
              🛒 Order Now
            </Link>
            <Link to="/menu" className="btn btn-secondary btn-lg" id="hero-menu-btn">
              View Menu
            </Link>
          </div>
          <div className="hero-stats animate-fade-in-up" style={{animationDelay:'0.6s'}}>
            <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Menu Items</span></div>
            <div className="stat-divider"/>
            <div className="stat"><span className="stat-num">4.8★</span><span className="stat-label">Rating</span></div>
            <div className="stat-divider"/>
            <div className="stat"><span className="stat-num">30min</span><span className="stat-label">Delivery</span></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  );
}
