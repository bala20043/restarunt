import { createContext, useContext, useReducer, useCallback, useState } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id && i.size === action.payload.size);
      if (existing) {
        return { ...state, items: state.items.map(i => i.id === action.payload.id && i.size === action.payload.size ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) } : i) };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1, cartId: Date.now() }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.cartId !== action.payload) };
    case 'UPDATE_QUANTITY':
      return { ...state, items: state.items.map(i => i.cartId === action.payload.cartId ? { ...i, quantity: Math.max(1, action.payload.quantity) } : i) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

const initialState = {
  items: JSON.parse(localStorage.getItem('flamegrill_cart') || '[]'),
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    showToast(`${item.name} added to cart!`);
  }, [showToast]);

  const removeItem = useCallback((cartId, name) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
    showToast(`${name} removed from cart`, 'info');
  }, [showToast]);

  const updateQuantity = useCallback((cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
    showToast('Cart cleared', 'info');
  }, [showToast]);

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal >= 299 ? 0 : 40;
  const total = subtotal + tax + deliveryFee;

  // Persist to localStorage
  try { localStorage.setItem('flamegrill_cart', JSON.stringify(state.items)); } catch(e) {}

  return (
    <CartContext.Provider value={{ items: state.items, cartCount, subtotal, tax, deliveryFee, total, addItem, removeItem, updateQuantity, clearCart, toasts }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
