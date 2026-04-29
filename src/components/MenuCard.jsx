import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './MenuCard.css';

export default function MenuCard({ item }) {
  const { addItem } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);

  const spiceLabels = ['', '🌶 Mild', '🌶🌶 Medium', '🌶🌶🌶 Hot'];

  return (
    <div className="menu-card card" id={`menu-item-${item.id}`}>
      <div className="menu-card-img-wrap">
        {!imgLoaded && <div className="skeleton menu-card-skeleton" />}
        <img
          src={item.image}
          alt={item.name}
          className={`menu-card-img ${imgLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        <div className="menu-card-badges">
          <span className={`badge ${item.isVeg ? 'badge-veg' : 'badge-nonveg'}`}>
            {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
          </span>
          {item.spiceLevel > 0 && (
            <span className={`badge badge-spice-${item.spiceLevel}`}>
              {spiceLabels[item.spiceLevel]}
            </span>
          )}
        </div>
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{item.name}</h3>
        <p className="menu-card-desc">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">₹{item.price}</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => addItem({ ...item, size: item.customizations?.sizes?.[0] || 'Regular' })}
            id={`add-to-cart-${item.id}`}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
