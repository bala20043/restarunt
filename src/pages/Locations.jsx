import { useState } from 'react';
import LocationCard from '../components/LocationCard';
import { locations } from '../data/menuData';
import './Locations.css';

export default function Locations() {
  const [search, setSearch] = useState('');
  const filtered = locations.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.city.toLowerCase().includes(search.toLowerCase()) ||
    l.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-enter locations-page">
      <div className="container" style={{paddingTop:'8rem', paddingBottom:'4rem'}}>
        <h1 className="section-title">Our <span className="gradient-text">Locations</span></h1>
        <p className="section-subtitle">Find a FlameGrill near you — we're spreading the fire!</p>

        {/* Map Placeholder */}
        <div className="map-placeholder" id="locations-map">
          <div className="map-inner">
            <span className="map-icon">🗺️</span>
            <p>Interactive map</p>
            <span style={{fontSize:'0.8rem',color:'var(--clr-text-muted)'}}>5 locations across India</span>
          </div>
        </div>

        {/* Search */}
        <div className="location-search" id="location-search">
          <input className="form-input" placeholder="🔍 Search by city or area..." value={search} onChange={e => setSearch(e.target.value)} id="location-search-input" />
        </div>

        {/* Location Cards */}
        <div className="locations-grid" id="locations-grid">
          {filtered.length === 0 ? (
            <p style={{gridColumn:'1/-1', textAlign:'center', color:'var(--clr-text-muted)', padding:'2rem'}}>No locations found for "{search}"</p>
          ) : (
            filtered.map(loc => <LocationCard key={loc.id} location={loc} />)
          )}
        </div>
      </div>
    </div>
  );
}
