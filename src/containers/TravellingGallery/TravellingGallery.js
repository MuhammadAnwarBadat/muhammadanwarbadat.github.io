// container/TravellingGallery/TravellingGallery.js
import React from 'react';
import './TravellingGallery.scss';

const TravellingGallery = () => {
  const galleryItems = [
    // You can replace these with actual image and video URLs later
    { type: 'image', src: './assets/images/TravelGallery/Copy of DSC09372.JPG', alt: 'Image 1' },
    { type: 'video', src: './assets/images/TravelGallery/VID_20221008_170759.mp4', alt: 'Video 1' },
    { type: 'image', src: './assets/images/TravelGallery/Copy of DSC09449.JPG', alt: 'Image 2' },
    { type: 'image', src: './assets/images/TravelGallery/Copy of IMG_8298.jpg', alt: 'Image 3' },
    // Add more images/videos as required
  ];

  return (
    <section className="travelling-gallery">
      <h2>My Travelling Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravellingGallery;
