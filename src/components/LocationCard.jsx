import './LocationCard.css';

export default function LocationCard({ location }) {
  const mapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;

  return (
    <div className="location-card card" id={`location-${location.id}`}>
      <div className="location-card-map">
        <div className="location-map-placeholder">📍</div>
      </div>
      <div className="location-card-body">
        <h3 className="location-card-name">{location.name}</h3>
        <p className="location-card-addr">{location.address}</p>
        <div className="location-card-detail">
          <span>🕐 {location.hours}</span>
          <span>📞 {location.phone}</span>
        </div>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id={`directions-${location.id}`}>
          Get Directions →
        </a>
      </div>
    </div>
  );
}
