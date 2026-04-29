import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Toast from './components/Toast';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reservations from './pages/Reservations';
import Offers from './pages/Offers';
import Locations from './pages/Locations';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Toast />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}
