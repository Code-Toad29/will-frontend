import React, { useState } from "react";
import "./ImageSlider.css"; // Import CSS for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <button className="prev" onClick={prevImage}>
        ❮
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={nextImage}>
        ❯
      </button>
      <div className="indicator">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
