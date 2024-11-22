import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// El componente CustomCarousel ahora usará los datos de producto
function CustomCarousel({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item, idx) => (
        <Carousel.Item
          key={idx}
          className={`
            ${index === idx ? 'active-center' : ''}
            ${index - 1 === idx || index + 1 === idx ? 'small-left' : ''}
            ${index === data.length - 1 && idx === 0 ? 'small-right' : ''}
            ${index === 0 && idx === data.length - 1 ? 'small-left' : ''}
          `}
        >
          <img
            className="carousel-img-small"
            src={item.img}
            alt={item.alt}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
