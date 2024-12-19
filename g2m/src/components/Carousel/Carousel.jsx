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

  // Preload first three images
  useEffect(() => {
    const preloadFirstImages = async () => {
      const firstThreeImages = data.slice(0, 3);
      await Promise.all(
        firstThreeImages.map(
          (product, index) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = product.img;
              img.onload = () => {
                setLoadedImages((prev) => ({ ...prev, [index]: true }));
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

  // Pause/Play carousel based on page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sliderRef.current?.slickPause();
      } else if (!isInitialLoad) {
        sliderRef.current?.slickPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isInitialLoad]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isInitialLoad,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    draggable: true,
    swipe: true,
    centerMode: true,
    lazyLoad: "progressive",
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
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
