import React, { useEffect } from 'react';
import './AboutUs.css';
import compromiso from '../../images/about-us/compromiso.jpg';
import nosotros from '../../images/about-us/nosotros.webp';
import experiencia from '../../images/about-us/experiencia.webp';

const AboutUs = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.about-us-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="about-us">
      <div className="about-us-section left">
        <div className="about-us-text">
          <h2>Sobre Nosotros</h2>
          <p>
          Representamos con orgullo a Molinos Río Segundo, especializándonos en la venta de harina y productos masivos para soluciones industriales y de consumo final.
          </p>
        </div>
        <img src={nosotros} alt="Harina Industrial" className="about-us-image" />
      </div>
      
      <div className="about-us-section right">
        <div className="about-us-text">
          <h2>Nuestra Experiencia</h2>
          <p>
          Con más de 20 años de trayectoria en el mercado, contamos con una sólida experiencia que abarca tres generaciones dedicadas a la venta y distribución de harina.
          </p>
        </div>
        <img src={experiencia} alt="Experiencia de 20 años" className="about-us-image" />
      </div>

      <div className="about-us-section left">
        <div className="about-us-text">
          <h2>Nuestro Compromiso</h2>
          <p>
          Nos distinguimos tanto por la calidad de nuestros productos como por el servicio al cliente que brindamos, adaptado a las necesidades de cada uno de nuestros socios comerciales.</p>
        </div>
        <img src={compromiso} alt="Calidad del Producto" className="about-us-image" />
      </div>
    </section>
  );
};

export default AboutUs;
