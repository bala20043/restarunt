import { useState } from 'react';
import './ReservationForm.css';

export default function ReservationForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', date:'', time:'', partySize:'2', requests:'' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please select a time';
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

  if (submitted) {
    return (
      <div className="reservation-success" id="reservation-success">
        <div className="success-icon">✓</div>
        <h3>Reservation Confirmed!</h3>
        <p>Thank you, {form.name}! We've reserved a table for {form.partySize} on {form.date} at {form.time}.</p>
        <p className="success-sub">You'll receive a confirmation at {form.email}</p>
        <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', email:'', date:'', time:'', partySize:'2', requests:'' }); }}>
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit} id="reservation-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Name *</label>
          <input className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your full name" value={form.name} onChange={e => handleChange('name', e.target.value)} id="res-name" />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Phone *</label>
          <input className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit number" value={form.phone} onChange={e => handleChange('phone', e.target.value)} id="res-phone" />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Email *</label>
        <input type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="your@email.com" value={form.email} onChange={e => handleChange('email', e.target.value)} id="res-email" />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Date *</label>
          <input type="date" className={`form-input ${errors.date ? 'error' : ''}`} value={form.date} onChange={e => handleChange('date', e.target.value)} id="res-date" />
          {errors.date && <span className="form-error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Time *</label>
          <input type="time" className={`form-input ${errors.time ? 'error' : ''}`} value={form.time} onChange={e => handleChange('time', e.target.value)} id="res-time" />
          {errors.time && <span className="form-error">{errors.time}</span>}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Party Size</label>
        <select className="form-input" value={form.partySize} onChange={e => handleChange('partySize', e.target.value)} id="res-party">
          {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Special Requests</label>
        <textarea className="form-input" placeholder="Allergies, birthday, seating preference..." value={form.requests} onChange={e => handleChange('requests', e.target.value)} id="res-requests" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%'}} id="res-submit">
        Reserve Table
      </button>
    </form>
  );
}
