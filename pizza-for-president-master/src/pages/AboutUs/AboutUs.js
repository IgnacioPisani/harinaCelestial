import React, { useEffect } from 'react';
import './AboutUs.css';
import compromiso from '../../images/compromiso.jpg';
import nosotros from '../../images/nosotros.jpg';
import experiencia from '../../images/experiencia.jpg';

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
          <h2>Sobre nosotros</h2>
          <p>
            Somos representantes de venta de molinos río segundo, comercializamos harina industrial y productos masivos.
          </p>
        </div>
        <img src={nosotros} alt="Harina Industrial" className="about-us-image" />
      </div>
      
      <div className="about-us-section right">
        <div className="about-us-text">
          <h2>Nuestra experiencia</h2>
          <p>
            Tenemos más de 20 años de experiencia y 3 generaciones dedicadas a la venta de harina.
          </p>
        </div>
        <img src={experiencia} alt="Experiencia de 20 años" className="about-us-image" />
      </div>

      <div className="about-us-section left">
        <div className="about-us-text">
          <h2>Nuestro compromiso</h2>
          <p>
            Nos destaca la calidad del producto y el servicio brindado.
          </p>
        </div>
        <img src={compromiso} alt="Calidad del Producto" className="about-us-image" />
      </div>
    </section>
  );
};

export default AboutUs;
