import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

// Flecha personalizada para el carrusel
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

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };
  const settings = {
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Número de elementos visibles
    slidesToScroll: 1, // Número de elementos a desplazar
    autoplay: true, // Activar reproducción automática
    autoplaySpeed: 2000, // Velocidad de reproducción automática
    pauseOnHover: false, // No pausar al pasar el mouse
    draggable: false, // Desactivar el arrastre
    swipe: false, // Desactivar swipe en dispositivos táctiles
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

  return (
    <div className="carousel">
    <Slider {...settings}>
  {data.map((product, index) => (
    <div
      key={index}
      className={`product-card ${loadedImages[index] ? "loaded" : "loading"}`}
    >
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
    </div>
  ))}
</Slider>

    </div>
  );
};

export default Carousel;
