import { useCart } from '../context/CartContext';
import './CartSidebar.css';

export default function CartSidebar({ isOpen, onClose }) {
  const { items, cartCount, subtotal, tax, deliveryFee, total, removeItem, updateQuantity } = useCart();

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} id="cart-sidebar">
        <div className="cart-header">
          <h3>🛒 Your Cart ({cartCount})</h3>
          <button className="cart-close" onClick={onClose} id="cart-close-btn">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🍽️</span>
            <p>Your cart is empty</p>
            <span className="cart-empty-sub">Add some delicious items!</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.cartId} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-size">{item.size}</span>
                    <span className="cart-item-price">₹{item.price * item.quantity}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)}>+</button>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeItem(item.cartId, item.name)}>🗑</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="cart-row"><span>Tax (5%)</span><span>₹{tax}</span></div>
              <div className="cart-row"><span>Delivery</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span></div>
              <div className="cart-row cart-total"><span>Total</span><span>₹{total}</span></div>
              <button className="btn btn-primary" style={{width:'100%',marginTop:'0.75rem'}} id="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
