import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({ data }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {data.map((product, index) => (
          <div
            key={index}
            className={`product-card ${loadedImages[index] ? 'loaded' : 'loading'}`}
          >
            <img
              src={product.img}
              alt={product.alt}
              onLoad={() => handleImageLoad(index)}
              style={{ display: loadedImages[index] ? 'block' : 'none' }}
            />
            {!loadedImages[index] && (
              <div className="image-placeholder">Cargando...</div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
