import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
const Carousel = ({ data }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,  // Número de productos visibles por defecto
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // A partir de 1024px o menos
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // A partir de 768px o menos (tabletas)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // A partir de 480px o menos (móviles)
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
          <div key={index} className="product-card">
            <img src={product.img} alt={product.alt} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
