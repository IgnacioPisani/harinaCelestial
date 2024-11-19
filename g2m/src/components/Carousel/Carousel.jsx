import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
const Carousel = ({ data }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,  // Número de productos visibles por defecto
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: 'ondemand', // Activa la carga diferida de imágenes
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
          <div key={index} className="product-card">
            <img src={product.img} alt={product.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
