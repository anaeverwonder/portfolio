import React, { useState } from "react";
import "../App.css";

function Illustration() {
  const [activeImage, setActiveImage] = useState(null);

  // URL Base dari Supabase Storage kamu
  const BASE_URL = "https://wplytqpvarnwnmpchipb.supabase.co/storage/v1/object/public/illustration";

  // DATA UTAMA BARIS ATAS (1-10)
  const columnsAtas = {
    col1: [
      { id: 1, title: "Illustration 01", imgUrl: `${BASE_URL}/ilu1.png`, ratioClass: "ratio-1-1" },
      { id: 6, title: "Illustration 06", imgUrl: `${BASE_URL}/ilu6.png`, ratioClass: "ratio-1-3", alignClass: "center", desc: "Karakter semi-realis closeup dengan fokus pencahayaan dramatis." }
    ],
    col2: [
      { id: 2, title: "Illustration 02", imgUrl: `${BASE_URL}/ilu2.png`, ratioClass: "ratio-1-1" },
      { id: 7, title: "Illustration 07", imgUrl: `${BASE_URL}/ilu7.png`, ratioClass: "ratio-1-2" }
    ],
    col3: [
      { id: 3, title: "Illustration 03", imgUrl: `${BASE_URL}/ilu3.png`, ratioClass: "ratio-1-3" },
      { id: 8, title: "Illustration 08", imgUrl: `${BASE_URL}/ilu8.png`, ratioClass: "ratio-2-1" }
    ],
    col4: [
      { id: 4, title: "Illustration 04", imgUrl: `${BASE_URL}/ilu4.png`, ratioClass: "ratio-1-1" },
      { id: 9, title: "Illustration 09", imgUrl: `${BASE_URL}/ilu9.png`, ratioClass: "ratio-1-3" }
    ],
    col5: [
      { id: 5, title: "Illustration 05", imgUrl: `${BASE_URL}/ilu5.png`, ratioClass: "ratio-1-3" },
      { id: 10, title: "Illustration 10", imgUrl: `${BASE_URL}/ilu10.png`, ratioClass: "ratio-1-1" }
    ]
  };

  // DATA UTAMA BARIS BAWAH (11-19) dengan penanganan ekstensi file (.jpg/.png)
  const gridBawah = [
    { id: 11, title: "Illustration 11", imgUrl: `${BASE_URL}/ilu11.png` },
    { id: 12, title: "Illustration 12", imgUrl: `${BASE_URL}/ilu12.jpg` }, // Format JPG
    { id: 13, title: "Illustration 13", imgUrl: `${BASE_URL}/ilu13.png` },
    { id: 14, title: "Illustration 14", imgUrl: `${BASE_URL}/ilu14.png` },
    { id: 15, title: "Illustration 15", imgUrl: `${BASE_URL}/ilu15.png` },
    { id: 16, title: "Illustration 16", imgUrl: `${BASE_URL}/ilu16.png` },
    { id: 17, title: "Illustration 17", imgUrl: `${BASE_URL}/ilu17.jpg` }, // Format JPG
    { id: 18, title: "Illustration 18", imgUrl: `${BASE_URL}/ilu18.png` },
    { id: 19, title: "Illustration 19", imgUrl: `${BASE_URL}/ilu19.png` }
  ];

  return (
    <div className="illustration-page">
      
      {/* HEADER: Kanan Atas dengan Huruf Terpisah Paten */}
      <header className="illustration-header">
        <h1>
          <span className="char c1">I</span><span className="char c2">L</span>
          <span className="char c3">L</span><span className="char c4">U</span>
          <span className="char c5">S</span><span className="char c6">T</span>
          <span className="char c7">R</span><span className="char c8">A</span>
          <span className="char c9">T</span><span className="char c10">I</span>
          <span className="char c11">O</span><span className="char c12">N</span>
        </h1>
      </header>

      {/* GALLERY SECTION 1: SEAMLESS MASONRY GRID (1-10) */}
      <section className="section-grid-atas">
        <div className="seamless-container">
          {Object.keys(columnsAtas).map((colKey, index) => {
            const staticColumnKeys = ["col-tiang-1", "col-tiang-2", "col-tiang-3", "col-tiang-4", "col-tiang-5"];
            
            return (
              <div key={staticColumnKeys[index]} className="seamless-column">
                {columnsAtas[colKey].map((item) => (
                  <button 
                    key={item.id} 
                    className={`gallery-card ${item.ratioClass}`}
                    onClick={() => setActiveImage(item)}
                    aria-label={`View full version of ${item.title}`}
                  >
                    <img 
                      src={item.imgUrl} 
                      alt={item.title} 
                      className={`gallery-img ${item.alignClass || ""}`} 
                    />
                    <div className="gallery-overlay">
                      <span>VIEW</span>
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY SECTION 2: SPACED GRID BAWAH (11-19) */}
      <section className="section-grid-bawah">
        <div className="spaced-container">
          {gridBawah.map((item) => (
            <button 
              key={item.id} 
              className="gallery-card ratio-1-1"
              onClick={() => setActiveImage(item)}
              aria-label={`View full version of ${item.title}`}
            >
              <img 
                src={item.imgUrl} 
                alt={item.title} 
                className={`gallery-img ${item.alignClass || ""}`} 
              />
              <div className="gallery-overlay">
                <span>VIEW</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL DIALOG LIGHTBOX FIXED */}
      {activeImage && (
        <div className="modal-lightbox">
          <button 
            className="modal-backdrop-close" 
            onClick={() => setActiveImage(null)} 
            aria-label="Close modal"
          />
          <div className="modal-wrapper">
            <button 
              className="modal-close" 
              onClick={() => setActiveImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-content">
              <img src={activeImage.imgUrl} alt={activeImage.title} className="modal-img-full" />
              
              <div className="modal-desc-card">
                <h4>{activeImage.title}</h4>
                <p>{activeImage.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Illustration;