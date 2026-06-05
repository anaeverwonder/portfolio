import React, { useState, useRef } from "react";
import "../App.css";

// IMPORT SEMUA FILE VIDEO LO
import vid1 from "../assets/motion/vid1.mp4";
import vid2 from "../assets/motion/vid2.mp4";
import vid3 from "../assets/motion/vid3.mp4";
import vid4 from "../assets/motion/vid4.mp4";
import vid5 from "../assets/motion/vid5.mp4";
import vid6 from "../assets/motion/vid6.mp4";
import vid7 from "../assets/motion/vid7.mp4";
import vid8 from "../assets/motion/vid8.mp4";
import vid9 from "../assets/motion/vid9.mp4";

function Motion() {
  const [activeAudioId, setActiveAudioId] = useState(null);
  const videoRefs = useRef({});

  const toggleMute = (id) => {
    Object.keys(videoRefs.current).forEach((key) => {
      if (key !== String(id) && videoRefs.current[key]) {
        videoRefs.current[key].muted = true;
      }
    });

    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setActiveAudioId(video.muted ? null : id);
    }
  };

  // DATA VIDEO (Sesuaikan type berdasarkan layout lo: wide, tall, wide-black, full)
  const videoData = [
    { id: 1, title: "Video 1", type: "wide", src: vid1, desc: "Deskripsi Video 1..." },
    { id: 2, title: "Video 2", type: "wide-black", src: vid2, desc: "Deskripsi Video 2..." },
    { id: 3, title: "Video 3", type: "tall", src: vid3, desc: "Deskripsi Video 3..." },
    { id: 4, title: "Video 4", type: "tall", src: vid4, desc: "Deskripsi Video 4..." },
    { id: 5, title: "Video 5", type: "tall", src: vid5, desc: "Deskripsi Video 5..." },
    { id: 6, title: "Video 6", type: "tall", src: vid6, desc: "Deskripsi Video 6..." },
    { id: 7, title: "Video 7", type: "tall", src: vid7, desc: "Deskripsi Video 7..." },
    { id: 8, title: "Video 8", type: "tall", src: vid8, desc: "Deskripsi Video 8..." },
    { id: 9, title: "Video 9", type: "full", src: vid9, desc: "Deskripsi Video 9..." },
  ];

  // ... kode sebelumnya ...

return (
  <div className="motion-page">
    <h2 className="motion-title">MOTION</h2>
    <div className="motion-grid">
      {videoData.map((v) => (
        <div key={v.id} className={`video-card ${v.type}`}>
          <video
            ref={(el) => (videoRefs.current[v.id] = el)}
            src={v.src}
            autoPlay
            loop
            muted
            playsInline
            onClick={() => toggleMute(v.id)}
            // Kita kasih class 'active' kalau ID-nya sama dengan activeAudioId
            className={activeAudioId === v.id ? "video-active" : ""}
            style={{ cursor: "pointer", width: "100%", height: "100%", objectFit: "cover" }}
          />
          
          <div className="video-info-overlay">
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Motion;