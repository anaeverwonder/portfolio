import React from "react";
import "../App.css";

function Branding() {
  return (
    <div className="branding-page">
      
      {/* SECTION 1: HERO TITLE EFFECTS */}
      <section className="branding-hero">
        <div className="text-stack">
          <span className="stack-light line-1">BRANDING</span>
          <span className="stack-light-2 line-2">BRANDING</span>
          <span className="stack-medium line-3">BRANDING</span>
          <h1 className="stack-bold line-4">BRANDING</h1>
          <span className="stack-medium line-5">BRANDING</span>
          <span className="stack-light-2 line-6">BRANDING</span>
          <span className="stack-light line-7">BRANDING</span>
        </div>
      </section>

      {/* SECTION 2: BRAND WORK BANNER */}
      <section className="brand-intro-section">
        <p className="brand-meta">Brand that I worked for</p>
        <div className="brand-black-banner">
          {/* Taruh aset gambar banner/client lo disini nanti */}
        </div>
      </section>

      {/* SECTION 3: JADOEL TITLE */}
      <section className="brand-title-section">
        <span className="brand-subtitle">TOKO KUE BALOK</span>
        <h2 className="brand-main-title">JADOEL</h2>
      </section>

      {/* SECTION 4: LOGO GRID (Split Layout) */}
      <section className="logo-grid-section">
        <div className="logo-left-box">
          {/* Placeholder kotak abu-abu kiri */}
        </div>
        <div className="logo-right-box">
          <span>Logo</span>
        </div>
      </section>

      {/* SECTION 5: LOGO TRANSFORMATION */}
      <section className="transformation-section">
        <span>Logo Transformation</span>
      </section>

      {/* SECTION 6: COLOR & COLLATERALS (Split Layout) */}
      <section className="collaterals-section">
        <div className="color-scheme-box">
          <span>Color Scheme</span>
        </div>
        <div className="collaterals-right-box">
          <span>Collaterals</span>
        </div>
      </section>

      {/* SECTION 7: SHOWCASE */}
      <section className="showcase-section">
        <span>Showcase</span>
      </section>

      {/* SECTION 8: ETC */}
      <section className="etc-section">
        <span>ETC...</span>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3 className="footer-title">CONTACT:</h3>
        <div className="footer-links">
          <div>
            INSTAGRAM
            <br />
            <span className="footer-sub">@anaeverwonder</span>
          </div>
          <div>
            LINKEDIN
            <br />
            <span className="footer-sub">Tzar</span>
          </div>
          <div>
            PHONE (WHATSAPP)
            <br />
            <span className="footer-sub">+62 895-3348-30160</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Branding;