import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import MenuCard from '../components/MenuCard';
import TestimonialStrip from '../components/TestimonialStrip';
import { menuItems } from '../data/menuData';
import './Home.css';

const bestSellers = menuItems.filter(i => [1, 2, 6, 12, 17, 20].includes(i.id));

export default function Home() {
  return (
    <div className="page-enter">
      <HeroBanner />

      {/* Quick Nav Strip */}
      <section className="quick-nav" id="quick-nav">
        <div className="container">
          <div className="quick-nav-grid">
            {[
              { to:'/menu', icon:'🍔', label:'Menu' },
              { to:'/order', icon:'🛒', label:'Order' },
              { to:'/locations', icon:'📍', label:'Locations' },
              { to:'/offers', icon:'🎁', label:'Deals' },
            ].map(item => (
              <Link key={item.to} to={item.to} className="quick-nav-item">
                <span className="quick-nav-icon">{item.icon}</span>
                <span className="quick-nav-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" id="best-sellers">
        <div className="container">
          <h2 className="section-title">Our <span className="gradient-text">Best Sellers</span></h2>
          <p className="section-subtitle">The crowd favorites that keep people coming back</p>
          <div className="menu-grid">
            {bestSellers.map(item => <MenuCard key={item.id} item={item} />)}
          </div>
          <div style={{textAlign:'center', marginTop:'2rem'}}>
            <Link to="/menu" className="btn btn-secondary">View Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner" id="promo-banner">
        <div className="container">
          <div className="promo-inner">
            <div className="promo-content">
              <span className="promo-tag">🔥 Limited Time</span>
              <h2 className="promo-title">Buy 1 Get 1 Free<br/>Every Tuesday!</h2>
              <p className="promo-text">Grab your favorite burger and get another one on the house. Share with a friend or keep both — we won't judge! 😉</p>
              <Link to="/offers" className="btn btn-accent btn-lg">View All Deals</Link>
            </div>
            <div className="promo-img-wrap">
              <img src="/images/food-spread.png" alt="Special deal" className="promo-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialStrip />

      {/* App Download */}
      <section className="app-section section" id="app-download">
        <div className="container">
          <div className="app-inner">
            <div className="app-content">
              <h2 className="section-title" style={{textAlign:'left'}}>
                Get the <span className="gradient-text">FlameGrill</span> App
              </h2>
              <p style={{color:'var(--clr-text-secondary)', marginBottom:'1.5rem', maxWidth:'450px'}}>
                Order faster, earn rewards, and get exclusive app-only deals. Available on iOS and Android.
              </p>
              <div className="app-features">
                <span>✓ Exclusive deals</span>
                <span>✓ Order tracking</span>
                <span>✓ Loyalty rewards</span>
                <span>✓ Easy reorder</span>
              </div>
              <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
                <a href="#" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  App Store
                </a>
                <a href="#" className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z"/></svg>
                  Google Play
                </a>
              </div>
            </div>
            <div className="app-phone">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span className="logo-icon" style={{fontSize:'1.5rem'}}>🔥</span>
                    <span style={{fontFamily:'var(--font-heading)', fontWeight:700}}>FlameGrill</span>
                  </div>
                  <img src="/images/hero-burger.png" alt="App preview" style={{width:'100%', borderRadius:'8px', marginBottom:'0.5rem'}} />
                  <div style={{background:'var(--clr-bg-card)', borderRadius:'8px', padding:'0.5rem', fontSize:'0.65rem'}}>
                    <strong>Classic Smash Burger</strong><br/>
                    <span style={{color:'var(--clr-accent)'}}>₹199</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
