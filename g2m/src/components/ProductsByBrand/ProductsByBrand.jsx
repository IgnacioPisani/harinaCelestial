import React, { useState, useEffect } from 'react';
import './ProductsByBrand.css';

const ProductsByBrand = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Reinicia la pestaña activa al cambiar la marca
  useEffect(() => {
    setActiveTab(0); // Siempre inicia en la primera sección
  }, [data]);

  if (!data || Object.keys(data).length === 0) {
    return <div>No products available</div>;
  }

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="pb-container">
      <div className="pb-brand-section">
        {/* Encabezado de la marca */}
        <div className="pb-brand-header">
          <img src={data.logo} alt={`${data.name} logo`} className="pb-brand-logo" />
        </div>

        {/* Pestañas */}
        <div className="pb-tabs">
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
