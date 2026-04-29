import { useCart } from '../context/CartContext';
import './Toast.css';

export default function Toast() {
  const { toasts } = useCart();
  return (
    <div className="toast-container" id="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          <span className="toast-icon">{t.type === 'success' ? '✓' : 'ℹ'}</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
