import './About.css';

export default function About() {
  return (
    <div className="page-enter about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="section-title">Our <span className="gradient-text">Story</span></h1>
          <p className="section-subtitle">From a single grill to the city's favorite flame — here's how it started.</p>
        </div>
      </div>

      <div className="container">
        {/* Brand Story */}
        <section className="about-story section" id="brand-story">
          <div className="story-grid">
            <div className="story-content">
              <h2>Born from <span className="gradient-text">Fire & Passion</span></h2>
              <p>It all started in 2015, when two food-obsessed friends decided to create the burger they'd always dreamed of — bold, juicy, and kissed by real flames.</p>
              <p>What began as a small cart on MG Road quickly became the talk of the town. Word spread, lines formed, and soon, one cart became five restaurants across India.</p>
              <p>Today, FlameGrill serves over 10,000 burgers a day — but our mission hasn't changed: <strong>serve unforgettable food that brings people together.</strong></p>
            </div>
            <div className="story-img-wrap">
              <img src="/images/restaurant-interior.png" alt="FlameGrill restaurant" className="story-img" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section" id="mission-values">
          <h2 className="section-title" style={{fontSize:'2rem'}}>Mission & <span className="gradient-text">Values</span></h2>
          <p className="section-subtitle">What drives us every single day</p>
          <div className="values-grid">
            {[
              { icon:'🔥', title:'Bold Flavors', desc:'We never play it safe with taste. Every bite should be an experience.' },
              { icon:'🌱', title:'Fresh Ingredients', desc:'Farm-fresh produce, premium cuts, and house-made sauces — always.' },
              { icon:'💚', title:'Sustainability', desc:'Eco-friendly packaging, reduced waste, and local sourcing wherever possible.' },
              { icon:'🤝', title:'Community First', desc:'We grow with our neighborhoods, giving back through food drives and events.' },
            ].map((v, i) => (
              <div key={i} className="value-card card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hygiene & Quality */}
        <section className="hygiene-section section" id="hygiene-quality">
          <div className="hygiene-inner">
            <h2 style={{marginBottom:'1rem'}}>🛡️ Hygiene & Quality Commitment</h2>
            <div className="hygiene-badges">
              {['FSSAI Certified','ISO 22000','Daily Audits','Contactless Delivery','Temperature Controlled'].map((badge, i) => (
                <span key={i} className="hygiene-badge">✓ {badge}</span>
              ))}
            </div>
            <p style={{color:'var(--clr-text-secondary)', marginTop:'1rem', maxWidth:'600px', margin:'1rem auto 0', textAlign:'center', fontSize:'0.9rem'}}>
              Your health is our priority. Every kitchen, every day — inspected, sanitized, and certified.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="section" id="team-section">
          <h2 className="section-title" style={{fontSize:'2rem'}}>Meet the <span className="gradient-text">Team</span></h2>
          <p className="section-subtitle">The people behind the flames</p>
          <div className="team-grid">
            {[
              { name:'Arjun Kapoor', role:'Co-Founder & CEO', avatar:'AK' },
              { name:'Sneha Mehra', role:'Co-Founder & Head Chef', avatar:'SM' },
              { name:'Rohan Desai', role:'VP Operations', avatar:'RD' },
              { name:'Priya Nair', role:'Marketing Head', avatar:'PN' },
            ].map((member, i) => (
              <div key={i} className="team-card card" style={{padding:'2rem', textAlign:'center'}}>
                <div className="team-avatar">{member.avatar}</div>
                <h3 style={{marginTop:'1rem', fontSize:'1.1rem'}}>{member.name}</h3>
                <p style={{color:'var(--clr-text-muted)', fontSize:'0.85rem'}}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section" id="photo-gallery">
          <h2 className="section-title" style={{fontSize:'2rem'}}>Gallery</h2>
          <div className="gallery-strip">
            {['/images/hero-burger.png', '/images/food-spread.png', '/images/restaurant-interior.png', '/images/hero-burger.png', '/images/food-spread.png'].map((src, i) => (
              <div key={i} className="gallery-item">
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
