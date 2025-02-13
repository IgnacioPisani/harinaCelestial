import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "¿Hacen envíos?",
    answer: "Si, hacemos envíos a toda Córdoba, nos enfocamos en el centro y alrededores, pero también llegamos al interior. Consulta por tu caso puntual.",
  },
  {
    question: "¿Cada cuánto hacen envios?",
    answer: "Al centro de Córdoba y alrededores hacemos envíos diarios ya que contamos con una flota de camiones y descarga propia.",
  },
  {
    question: "¿Cuál es la compra mínima?",
    answer: "La compra mínima es de 40 bolsas, pero no dudes en consultar por tu caso puntual.",
  },
  {
    question: "¿Cómo puedo comprar si no llego al mínimo de compra?",
    answer: "Tenemos revendedores en distintos puntos de Córdoba que podrán hacer ventas por menor cantidad. No dudes en pedirnos los contactos.",
  },
  {
    question: "¿Tienen un espacio físico para retirar productos?",
    answer: "No poseemos un lugar físico, de querer retirar personalmente deberá ser directo del molino con coordinación del día y la hora previamente.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
    <section className="faq">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          onClick={() => toggleAnswer(index)}
        >
          <h3 className="faq-question">{item.question}</h3>
          <div className="faq-answer">{openIndex === index && item.answer}</div> {/* Modificado aquí */}
        </div>
      ))}
    </section>
    </div>
  );
};

export default Faq;
