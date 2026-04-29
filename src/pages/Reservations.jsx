import ReservationForm from '../components/ReservationForm';
import './Reservations.css';

export default function Reservations() {
  return (
    <div className="page-enter reservations-page">
      <div className="container" style={{paddingTop:'8rem', paddingBottom:'4rem'}}>
        <h1 className="section-title">Reserve a <span className="gradient-text">Table</span></h1>
        <p className="section-subtitle">Book your spot and skip the wait — we'll have it ready for you!</p>

        <ReservationForm />

        <div className="walkin-note" id="walkin-note">
          <span className="walkin-icon">ℹ️</span>
          <div>
            <strong>Walk-ins Welcome!</strong>
            <p>No reservation? No problem! We always have tables available for walk-in guests on a first-come, first-served basis. Wait times may vary during peak hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
