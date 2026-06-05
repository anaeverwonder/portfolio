import React, { useState, useRef } from "react";
import "../App.css";

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

  // URL Base dari Supabase biar kodingan di bawahnya gak kepanjangan
  const BASE_URL = "https://wplytqpvarnwnmpchipb.supabase.co/storage/v1/object/public/motion";

  // DATA VIDEO (Sudah pakai Direct URL Supabase & Optimasi reuse video)
  const videoData = [
    { id: 1, title: "Video 1", type: "wide", src: `${BASE_URL}/vid1.mp4`, desc: "Deskripsi Video 1..." },
    { id: 2, title: "Video 2", type: "wide-black", src: `${BASE_URL}/vid2.mp4`, desc: "Deskripsi Video 2..." },
    { id: 3, title: "Video 3", type: "tall", src: `${BASE_URL}/vid3.mp4`, desc: "Deskripsi Video 3..." },
    { id: 4, title: "Video 4", type: "tall", src: `${BASE_URL}/vid4.mp4`, desc: "Deskripsi Video 4..." },
    { id: 5, title: "Video 5", type: "tall", src: `${BASE_URL}/vid5.mp4`, desc: "Deskripsi Video 5..." },
    // Video 6, 7, 8 reuse asset dari video 3, 4, 5
    { id: 6, title: "Video 6", type: "tall", src: `${BASE_URL}/vid3.mp4`, desc: "Deskripsi Video 6..." },
    { id: 7, title: "Video 7", type: "tall", src: `${BASE_URL}/vid4.mp4`, desc: "Deskripsi Video 7..." },
    { id: 8, title: "Video 8", type: "tall", src: `${BASE_URL}/vid5.mp4`, desc: "Deskripsi Video 8..." },
    { id: 9, title: "Video 9", type: "full", src: `${BASE_URL}/vid9.mp4`, desc: "Deskripsi Video 9..." },
  ];

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