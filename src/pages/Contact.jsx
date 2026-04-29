import { useState } from 'react';
import { faqs } from '../data/menuData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="page-enter contact-page">
      <div className="container" style={{paddingTop:'8rem', paddingBottom:'4rem'}}>
        <h1 className="section-title">Get in <span className="gradient-text">Touch</span></h1>
        <p className="section-subtitle">We'd love to hear from you. Questions, feedback, or just saying hi!</p>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrap" id="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" id="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks, {form.name}! We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', subject:'', message:'' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your name" value={form.name} onChange={e => handleChange('name', e.target.value)} id="contact-name" />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="your@email.com" value={form.email} onChange={e => handleChange('email', e.target.value)} id="contact-email" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input className={`form-input ${errors.subject ? 'error' : ''}`} placeholder="What's this about?" value={form.subject} onChange={e => handleChange('subject', e.target.value)} id="contact-subject" />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className={`form-input ${errors.message ? 'error' : ''}`} placeholder="Tell us more..." value={form.message} onChange={e => handleChange('message', e.target.value)} id="contact-message" />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%'}} id="contact-submit">Send Message</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info" id="contact-info">
            <div className="info-card card" style={{padding:'2rem'}}>
              <h3 style={{marginBottom:'1.5rem'}}>📞 Contact Info</h3>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 11 2345 6789</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@flamegrill.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>10:00 AM – 11:00 PM, Daily</p>
                </div>
              </div>
              <div className="info-socials">
                <h4 style={{marginBottom:'0.75rem'}}>Follow Us</h4>
                <div style={{display:'flex', gap:'0.5rem'}}>
                  {['IG','FB','TW','YT'].map(s => (
                    <a key={s} href="#" className="info-social-btn">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="faq-section section" id="faq-section">
          <h2 className="section-title" style={{fontSize:'2rem'}}>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Quick answers to common questions</p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} id={`faq-${i}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-arrow">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
