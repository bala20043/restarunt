import { useState } from 'react';
import './OfferCard.css';

export default function OfferCard({ offer }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="offer-card card" id={`offer-${offer.id}`} style={{'--offer-clr': offer.color}}>
      <div className="offer-accent" />
      <div className="offer-body">
        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-desc">{offer.description}</p>
        <span className="offer-validity">📅 {offer.validity}</span>
        <div className="offer-action">
          {revealed ? (
            <div className="offer-code">
              <span>Code: <strong>{offer.code}</strong></span>
              <button className="btn btn-sm btn-secondary" onClick={() => { navigator.clipboard?.writeText(offer.code); }}>Copy</button>
            </div>
          ) : (
            <button className="btn btn-sm btn-primary" onClick={() => setRevealed(true)} id={`claim-${offer.id}`}>
              Claim Deal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
