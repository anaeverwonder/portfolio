import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Branding from "./pages/Branding";
import Illustration from "./pages/Illustration";
import Motion from "./pages/Motion";

// Komponen Floating Bubble terpisah biar kodenya rapi
function FloatingBackButton() {
  const location = useLocation();

  // Kalau lagi di halaman utama, gak perlu munculin tombol back
  if (location.pathname === "/") return null;

  return (
    <div className="back-nav-container">
      {/* Background Gradient Fade Hitam di sebelah kiri */}
      <div className="back-nav-fade"></div>
      
      {/* Tombol Bubble-nya */}
      <Link to="/" className="back-bubble">
        <span>Back to home?</span>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Taruh komponen di sini biar nge-render secara global di atas semua page */}
      <FloatingBackButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/motion" element={<Motion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;