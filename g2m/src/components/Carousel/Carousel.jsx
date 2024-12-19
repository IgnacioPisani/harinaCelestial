import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Arrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} custom-arrow ${direction}`}
    style={{ ...style }}
    onClick={onClick}
  >
    {direction === "prev" ? "←" : "→"}
  </div>
);

const Carousel = ({ data }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Precarga las primeras 3 imágenes
    const preloadFirstImages = async () => {
      const firstThreeImages = data.slice(0, 3);
      await Promise.all(
        firstThreeImages.map(
          (product, index) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = product.img;
              img.onload = () => {
                setLoadedImages(prev => ({ ...prev, [index]: true }));
                resolve();
              };
              img.onerror = resolve;
            })
        )
      );
      setIsInitialLoad(false);
    };

    preloadFirstImages();
  }, [data]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isInitialLoad, // No autoplay hasta que carguen las primeras imágenes
    autoplaySpeed: 3000, // Un poco más lento para mejor experiencia
    pauseOnHover: false,
    draggable: true, // Permitimos drag para mejor UX
    swipe: true, // Permitimos swipe para mejor UX en móvil
    centerMode: true,
    lazyLoad: "progressive", // Cambiamos a progressive para mejor performance
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Desactivamos centerMode en móvil
        },
      },
    ],
  };

  const handleMouseEnter = () => {
    sliderRef.current?.slickPause();
  };

  const handleMouseLeave = () => {
    if (!isInitialLoad) {
      sliderRef.current?.slickPlay();
    }
  };

  return (
    <div className="carousel">
      <Slider ref={sliderRef} {...settings}>
        {data.map((product, index) => (
          <div
            key={index}
            className={`product-card ${loadedImages[index] ? "loaded" : "loading"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href={product.link}>
              <div className="image-container">
                {!loadedImages[index] && (
                  <div className="image-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <img
                  src={product.img}
                  alt={product.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className={loadedImages[index] ? "loaded" : ""}
                />
              </div>
              <h3>{product.name}</h3>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
