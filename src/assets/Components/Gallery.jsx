import React from 'react';
import './Gallery.css'; 

const Gallery = () => {
  const galleryImages = [
    '1-scaled.jpg',
    'balaji-s-vertex-defence-academy-sikar-ho-sikar-air-force-training-centres-u3y153bbgb.avif',
    'Best-GTO-Ground-in-India.webp',
    'female-troopers_650_062612014940.jpg',
    'gto11.jpg',
    'gto12.jpg',
  ];

  return (
    <div className="gallery-wrapper lf-padding">
          <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>TRAINING PHOTOS</h1>
    </div>
      <div className="gallery-area">
        <div className="container-fluid">
          <div className="row gx-0">
            {galleryImages.map((src, index) => (
              <div className="gallery-items" key={index}>
                <img src={src} alt={`Gallery item ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

