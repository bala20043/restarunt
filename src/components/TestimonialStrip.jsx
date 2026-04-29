import './TestimonialStrip.css';
import { testimonials } from '../data/menuData';

export default function TestimonialStrip() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our <span className="gradient-text">Fans</span> Say</h2>
        <p className="section-subtitle">Join thousands of happy customers who keep coming back for more</p>
        <div className="testimonial-scroll">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card card">
              <div className="testimonial-stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <span className="testimonial-name">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
