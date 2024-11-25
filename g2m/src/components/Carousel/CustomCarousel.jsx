import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CustomCarousel({ data }) {
  return (
    <div className="custom-carousel-container">
      <Carousel>
        {data.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 carousel-product-img"
              src={item.img}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h5 className="carousel-product-name">{item.name}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
