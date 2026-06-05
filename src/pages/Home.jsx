import { Link } from "react-router-dom";
import "../App.css";

// Manggil file gambar dari folder assets
import brandingImg from "../assets/home/brandingImg.png";
import illustrationImg from "../assets/home/illustrationImg.png";
import motionImg from "../assets/home/motionImg.gif";

// Bikin dummy placeholder dulu buat gambar kotaknya
const placeholderImg = "https://via.placeholder.com/400x600/111111/ffffff?text=Photo+Placeholder";

function Home() {
  return (
    <main className="home">

      <header className="hero">
        <h1>ANA EVERWONDER</h1>
        <p className="real-name">( TZAR M. SHAQIEL R. )</p>
        <p className="role">BRAND & VISUAL DESIGNER</p>
      </header>

      <section className="works-section">
        <h2>WORKS</h2>

        <div className="works-grid">

          {/* Card 1: Branding */}
          <Link to="/branding" className="work-card">
            <img src={brandingImg} alt="Branding" className="card-img" />
            <div className="card-overlay"></div>
            <span>BRANDING</span>
          </Link>

          {/* Card 2: Illustration */}
          <Link to="/illustration" className="work-card">
            <img src={illustrationImg} alt="Illustration" className="card-img" />
            <div className="card-overlay"></div>
            <span>ILLUSTRATION</span>
          </Link>

          {/* Card 3: Motion */}
          <Link to="/motion" className="work-card">
            <img src={motionImg} alt="Motion" className="card-img" />
            <div className="card-overlay"></div>
            <span>MOTION</span>
          </Link>

        </div>
      </section>

<footer className="footer">
        {/* Judul Contact sekarang di atas */}
        <h3 className="footer-title">CONTACT:</h3>
        
        {/* Container sosmed biar bisa rata tengah barengan */}
        <div className="footer-links">
          <div>
            INSTAGRAM
            <br />
            <span className="footer-sub">@placeholder</span>
          </div>
          <div>
            LINKEDIN
            <br />
            <span className="footer-sub">Placeholder Name</span>
          </div>
          <div>
            PHONE (WHATSAPP)
            <br />
            <span className="footer-sub">+62 8xx-xxxx-xxxx</span>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default Home;