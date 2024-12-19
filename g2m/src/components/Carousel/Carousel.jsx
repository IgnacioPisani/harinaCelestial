import React, { useState, useRef } from "react";
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
  const sliderRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false, // Desactivamos el comportamiento global
    draggable: false,
    swipe: false,
    centerMode: true,
    lazyLoad: "ondemand",
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseEnter = () => {
    sliderRef.current.slickPause(); // Pausa el carrusel al hacer hover en la tarjeta
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPlay(); // Reanuda el carrusel al salir del hover
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
              <img
                src={product.img}
                alt={product.alt}
                onLoad={() => handleImageLoad(index)}
                style={{ display: loadedImages[index] ? "block" : "none" }}
              />
              {!loadedImages[index] && (
                <div className="image-placeholder">Cargando...</div>
              )}
              <h3 style={{ fontWeight: "bold" }}>{product.name}</h3>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
