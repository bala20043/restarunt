import { useState } from 'react';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/menuData';
import './Offers.css';

export default function Offers() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="page-enter offers-page">
      <div className="container" style={{paddingTop:'8rem', paddingBottom:'4rem'}}>
        <h1 className="section-title">Deals & <span className="gradient-text">Offers</span></h1>
        <p className="section-subtitle">Grab these hot deals before they're gone!</p>

        <div className="offers-grid" id="offers-grid">
          {offers.map(offer => <OfferCard key={offer.id} offer={offer} />)}
        </div>

        {/* Loyalty Program */}
        <section className="loyalty-section" id="loyalty-section">
          <h2 className="section-title" style={{fontSize:'2rem'}}>🏆 Loyalty <span className="gradient-text">Rewards</span></h2>
          <p className="section-subtitle">Earn points with every order. Redeem for free food!</p>
          <div className="loyalty-steps">
            {[
              { icon:'🛒', title:'Order', desc:'Earn 1 point for every ₹10 spent' },
              { icon:'⭐', title:'Collect', desc:'Save up points in your FlameGrill account' },
              { icon:'🎁', title:'Redeem', desc:'Use points for free meals, drinks & more!' },
            ].map((step, i) => (
              <div key={i} className="loyalty-step card">
                <span className="loyalty-step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section" id="newsletter">
          <div className="newsletter-inner">
            <h3>🔥 Get Exclusive Deals</h3>
            <p>Subscribe to our newsletter for app-exclusive offers & early access to new menu items.</p>
            {subscribed ? (
              <div className="newsletter-success">✓ You're subscribed! Check your inbox.</div>
            ) : (
              <div className="newsletter-form">
                <input className="form-input" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value)} id="newsletter-email" />
                <button className="btn btn-primary" onClick={() => { if (email.includes('@')) setSubscribed(true); }} id="newsletter-submit">Subscribe</button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
