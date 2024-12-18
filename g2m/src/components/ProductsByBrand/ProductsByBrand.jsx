import React, { useState, useEffect } from 'react';
import LogoG2m from '../../images/logos-brands/g2mnaranjacortado.webp';
import './ProductsByBrand.css';

const ProductsByBrand = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0); // Estado para manejar el combo desplegable

  // Reinicia la pestaña activa al cambiar la marca
  useEffect(() => {
    setActiveTab(0); // Siempre inicia en la primera sección
    setSelectedTab(0); // Reinicia el select cuando cambia la marca
  }, [data]);

  if (!data || Object.keys(data).length === 0) {
    return <div>No products available</div>;
  }

  const handleTabClick = (index) => {
    setActiveTab(index);
    setSelectedTab(index); // Actualiza el combo desplegable cuando se selecciona una pestaña
  };

  const handleSelectChange = (event) => {
    const index = parseInt(event.target.value, 10);
    setSelectedTab(index);
    setActiveTab(index); // Actualiza la pestaña activa cuando cambia el select
  };

  const isSingleSection = data.sections.length === 1;

  return (
    <div className="pb-container">
      <div className="pb-brand-section">
        {/* Encabezado de la marca */}
        <div className="pb-brand-header">
  <img src={LogoG2m} alt={`${data.name} G2M logo`} className="pb-brand-logo" />
  <div className="pb-brand-divider"></div>
  <img src={data.logo} alt={`${data.name}`} className="pb-brand-logo-brand" />
</div>


        {/* Pestañas */}
        <div className="pb-tabs">
          {/* Botones de pestañas */}
          <div className="pb-tab-buttons">
            {data.sections.map((section, sectionIndex) => (
              <button
                key={section.name}
                className={`pb-tab-button ${activeTab === sectionIndex ? 'pb-active' : ''}`}
                onClick={() => handleTabClick(sectionIndex)}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Combo desplegable para pantallas pequeñas */}
          <select
            className="pb-tab-select"
            value={selectedTab}
            onChange={handleSelectChange}
            disabled={isSingleSection}
          >
            {data.sections.map((section, sectionIndex) => (
              <option key={section.name} value={sectionIndex}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

        {/* Contenido de la pestaña activa */}
        {data.sections.map((section, sectionIndex) => (
          <div
            key={section.name}
            className={`pb-tab-content ${activeTab === sectionIndex ? 'pb-active' : ''}`}
          >
            <div className="pb-product-grid">
            {section.products.map((product) => (
  <div key={product.name} className="pb-product-card">
    <img className="pb-product-image" src={product.img} alt={product.name} />
    <p className="pb-product-name">{product.name}</p>
    {/* Contenedor para el manto negro y las especificaciones */}
    <div className="pb-product-overlay">
      <p>{product.specifications || 'Especificaciones no disponibles'}</p>
    </div>
  </div>
))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByBrand;
