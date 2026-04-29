import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import { menuItems, categories } from '../data/menuData';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = menuItems
    .filter(i => i.category === activeCategory)
    .filter(i => !vegOnly || i.isVeg);

  return (
    <div className="page-enter menu-page">
      <div className="menu-hero">
        <div className="container">
          <h1 className="section-title">Our <span className="gradient-text">Menu</span></h1>
          <p className="section-subtitle">From flame-grilled burgers to creamy shakes — find your next favorite</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-controls" id="menu-controls">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`toggle-option ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`cat-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="veg-toggle">
            <span style={{fontSize:'0.875rem', color:'var(--clr-text-secondary)'}}>Veg Only</span>
            <button
              className={`veg-switch ${vegOnly ? 'on' : ''}`}
              onClick={() => setVegOnly(!vegOnly)}
              id="veg-toggle"
              aria-label="Toggle vegetarian filter"
            >
              <span className="veg-switch-knob" />
            </button>
          </div>
        </div>

        <div className="menu-grid" id="menu-grid">
          {filtered.length === 0 ? (
            <div className="menu-empty">
              <span>🥗</span>
              <p>No items found. Try adjusting filters!</p>
            </div>
          ) : (
            filtered.map(item => <MenuCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
