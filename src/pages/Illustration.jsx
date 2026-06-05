import React, { useState } from "react";
import "../App.css";

// 1. IMPORT SEMUA GAMBAR ASLI LO DARI FOLDER ASSET
import ilu1 from "../assets/illustration/ilu1.png";
import ilu2 from "../assets/illustration/ilu2.png";
import ilu3 from "../assets/illustration/ilu3.png";
import ilu4 from "../assets/illustration/ilu4.png";
import ilu5 from "../assets/illustration/ilu5.png";
import ilu6 from "../assets/illustration/ilu6.png";
import ilu7 from "../assets/illustration/ilu7.png";
import ilu8 from "../assets/illustration/ilu8.png";
import ilu9 from "../assets/illustration/ilu9.png";
import ilu10 from "../assets/illustration/ilu10.png";
import ilu11 from "../assets/illustration/ilu11.png";
import ilu12 from "../assets/illustration/ilu12.jpg";
import ilu13 from "../assets/illustration/ilu13.png";
import ilu14 from "../assets/illustration/ilu14.png";
import ilu15 from "../assets/illustration/ilu15.png";
import ilu16 from "../assets/illustration/ilu16.png";
import ilu17 from "../assets/illustration/ilu17.jpg";
import ilu18 from "../assets/illustration/ilu18.png";
import ilu19 from "../assets/illustration/ilu19.png";

function Illustration() {
  const [activeImage, setActiveImage] = useState(null);

  // 2. DATA UTAMA BARIS ATAS (1-10)
  // Lo bisa nambah properti desc: "isi teks" di tiap objek kalau mau kustom deskripsinya
  const columnsAtas = {
    col1: [
      { id: 1, title: "Illustration 01", imgUrl: ilu1, ratioClass: "ratio-1-1" },
      { id: 6, title: "Illustration 06", imgUrl: ilu6, ratioClass: "ratio-1-3", alignClass: "center", desc: "Karakter semi-realis closeup dengan fokus pencahayaan dramatis." }
    ],
    col2: [
      { id: 2, title: "Illustration 02", imgUrl: ilu2, ratioClass: "ratio-1-1" },
      { id: 7, title: "Illustration 07", imgUrl: ilu7, ratioClass: "ratio-1-2" }
    ],
    col3: [
      { id: 3, title: "Illustration 03", imgUrl: ilu3, ratioClass: "ratio-1-3" },
      { id: 8, title: "Illustration 08", imgUrl: ilu8, ratioClass: "ratio-2-1" }
    ],
    col4: [
      { id: 4, title: "Illustration 04", imgUrl: ilu4, ratioClass: "ratio-1-1" },
      { id: 9, title: "Illustration 09", imgUrl: ilu9, ratioClass: "ratio-1-3" }
    ],
    col5: [
      { id: 5, title: "Illustration 05", imgUrl: ilu5, ratioClass: "ratio-1-3" },
      { id: 10, title: "Illustration 10", imgUrl: ilu10, ratioClass: "ratio-1-1" }
    ]
  };

  // 3. DATA UTAMA BARIS BAWAH (11-19)
  const gridBawah = [
    { id: 11, title: "Illustration 11", imgUrl: ilu11 },
    { id: 12, title: "Illustration 12", imgUrl: ilu12 },
    { id: 13, title: "Illustration 13", imgUrl: ilu13 },
    { id: 14, title: "Illustration 14", imgUrl: ilu14 },
    { id: 15, title: "Illustration 15", imgUrl: ilu15 },
    { id: 16, title: "Illustration 16", imgUrl: ilu16 },
    { id: 17, title: "Illustration 17", imgUrl: ilu17 },
    { id: 18, title: "Illustration 18", imgUrl: ilu18 },
    { id: 19, title: "Illustration 19", imgUrl: ilu19 }
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
                    onClick={() => setActiveImage(item)} // <-- KUNCI FIX: Ngirim objek item utuh, bukan string url doang
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
              onClick={() => setActiveImage(item)} // <-- KUNCI FIX: Samakan juga bagian bawah kirim objek utuh
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
          {/* Background Gelap + Blur Backdrop */}
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
              {/* Gambar Utama Showcase */}
              <img src={activeImage.imgUrl} alt={activeImage.title} className="modal-img-full" />
              
              {/* BOX DESKRIPSI OVERLAP DENGAN ANIMASI FADE-IN DELAY */}
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