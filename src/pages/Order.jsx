import { useState } from 'react';
import { useCart } from '../context/CartContext';
import MenuCard from '../components/MenuCard';
import { menuItems, categories } from '../data/menuData';
import './Order.css';

export default function Order() {
  const { items, subtotal, tax, deliveryFee, total, removeItem, updateQuantity, clearCart } = useCart();
  const [mode, setMode] = useState('delivery');
  const [address, setAddress] = useState('');
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customizeItem, setCustomizeItem] = useState(null);

  const filtered = menuItems.filter(i => i.category === activeCategory);

  if (orderPlaced) {
    return (
      <div className="page-enter order-page">
        <div className="container" style={{paddingTop:'8rem', paddingBottom:'4rem'}}>
          <div className="order-confirmed" id="order-confirmed">
            <div className="order-success-icon">🎉</div>
            <h2>Order Confirmed!</h2>
            <p className="order-id">Order #FG{Date.now().toString().slice(-6)}</p>
            <p>Estimated {mode === 'delivery' ? 'delivery' : 'pickup'} time: <strong>25-30 minutes</strong></p>
            <p style={{color:'var(--clr-text-muted)', fontSize:'0.875rem', marginTop:'0.5rem'}}>
              You'll receive a confirmation SMS with tracking details.
            </p>
            <button className="btn btn-primary" onClick={() => setOrderPlaced(false)} style={{marginTop:'1.5rem'}}>
              Order More
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter order-page">
      <div className="container" style={{paddingTop:'6rem', paddingBottom:'3rem'}}>
        <h1 className="section-title" style={{marginBottom:'0.5rem'}}>Order <span className="gradient-text">Online</span></h1>
        <p className="section-subtitle">Choose your items, customize, and enjoy!</p>

        {/* Delivery / Pickup Toggle */}
        <div style={{display:'flex',justifyContent:'center', marginBottom:'2rem'}}>
          <div className="toggle-wrapper" id="order-mode-toggle">
            <button className={`toggle-option ${mode === 'delivery' ? 'active' : ''}`} onClick={() => setMode('delivery')}>🚗 Delivery</button>
            <button className={`toggle-option ${mode === 'pickup' ? 'active' : ''}`} onClick={() => setMode('pickup')}>🏪 Pickup</button>
          </div>
        </div>

        {mode === 'delivery' && (
          <div className="address-bar" id="address-bar">
            <input className="form-input" placeholder="Enter delivery address..." value={address} onChange={e => setAddress(e.target.value)} id="address-input" />
            <button className="btn btn-sm btn-secondary" id="detect-location" onClick={() => setAddress('📍 MG Road, Connaught Place, New Delhi')}>
              📍 Detect
            </button>
          </div>
        )}

        <div className="order-layout">
          <div className="order-menu-section">
            <div className="category-tabs" style={{marginBottom:'1.5rem'}}>
              {categories.map(cat => (
                <button key={cat.id} className={`toggle-option ${activeCategory === cat.id ? 'active' : ''}`} onClick={() => setActiveCategory(cat.id)}>
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="menu-grid">
              {filtered.map(item => <MenuCard key={item.id} item={item} />)}
            </div>
          </div>

          {/* Cart Section */}
          <div className="order-cart-section" id="order-cart">
            <div className="order-cart-panel">
              <h3 style={{marginBottom:'1rem'}}>🛒 Your Order ({items.length})</h3>
              {items.length === 0 ? (
                <p style={{color:'var(--clr-text-muted)', textAlign:'center', padding:'2rem 0'}}>Your cart is empty</p>
              ) : (
                <>
                  {items.map(item => (
                    <div key={item.cartId} className="order-cart-item">
                      <div style={{flex:1}}>
                        <strong style={{fontSize:'0.85rem'}}>{item.name}</strong>
                        <div style={{fontSize:'0.75rem', color:'var(--clr-text-muted)'}}>{item.size}</div>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)}>+</button>
                      </div>
                      <span style={{fontWeight:700, color:'var(--clr-accent)', minWidth:'50px', textAlign:'right'}}>₹{item.price * item.quantity}</span>
                      <button className="cart-item-remove" onClick={() => removeItem(item.cartId, item.name)}>✕</button>
                    </div>
                  ))}

                  <div className="order-summary">
                    <div className="cart-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
                    <div className="cart-row"><span>Tax (5%)</span><span>₹{tax}</span></div>
                    <div className="cart-row"><span>Delivery</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span></div>
                    <div className="cart-row cart-total"><span>Total</span><span>₹{total}</span></div>
                  </div>

                  <div className="payment-section">
                    <h4 style={{marginBottom:'0.75rem', fontSize:'0.9rem'}}>Payment Method</h4>
                    {['card','upi','cod'].map(m => (
                      <label key={m} className={`payment-option ${paymentMethod === m ? 'selected' : ''}`}>
                        <input type="radio" name="payment" checked={paymentMethod === m} onChange={() => setPaymentMethod(m)} />
                        <span>{m === 'card' ? '💳 Card' : m === 'upi' ? '📱 UPI' : '💵 Cash on Delivery'}</span>
                      </label>
                    ))}
                  </div>

                  <button className="btn btn-primary" style={{width:'100%'}} onClick={() => { setOrderPlaced(true); clearCart(); }} id="place-order-btn">
                    Place Order — ₹{total}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
