import styled from 'styled-components';
import ImgBg from '../../images/hero/hero-harina-industrial.jpg';
import ImgLogo from '../../images/logo-g2m/g2mnaranja.webp';

export const HeroContainer = styled.div`
  background: linear-gradient(
      to top,
      rgba(244, 244, 244, 1) 0%,
      rgba(244, 244, 244, 0) 20%
    ),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  position: relative; /* Habilita posicionamiento absoluto para los hijos */
  padding: 2rem;
  width: 100%; /* Asegura que el contenedor ocupe el ancho completo */
  overflow-x: hidden; /* Evita el desbordamiento horizontal */

  @media screen and (max-width: 768px) {
    background-position: 50% center;
  }

  @media screen and (max-width: 480px) {
    background-position: 70% center;
  }
`;


export const Logo = styled.img.attrs({
  src: ImgLogo,
  alt: "Logo de G2M",
})`
  position: absolute;
  bottom: 14rem; /* Coloca el logo encima de los párrafos */
  right: 2rem; /* Ajusta al borde derecho */
  width: 350px;
  height: auto;

  @media screen and (max-width: 768px) {
    bottom: 9rem;
    width: 220px;
  }

  @media screen and (max-width: 480px) {
    bottom: 140%; /* Centra verticalmente */
    left: 50%; /* Centra horizontalmente */
    transform: translate(-50%, 50%); /* Asegura el centrado exacto */
    width: 140px; /* Ajusta el tamaño del logo */
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 4rem; /* Posición inicial */
  right: 2rem; /* Alineados a la derecha */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media screen and (max-width: 768px) {
    bottom: 8rem; /* Los párrafos suben más */
    right: 1rem;
  }

  @media screen and (max-width: 480px) {
    bottom: 40%; /* Ajusta la posición vertical para centrar */
    right: 50%; /* Ajusta la posición horizontal para centrar */
    transform: translate(50%, 50%); /* Centrado exacto */
    align-items: center; /* Centra los párrafos */
    text-align: center; /* Centra el texto */
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Espaciado entre los párrafos */
`;

export const HeroP = styled.p`
  font-size: clamp(2.85rem, 1.25vw, 1.5rem);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.2);
  margin: 0;
  padding: 0.5rem 0;
  text-align: right;

  span {
    color: #FF8906; /* Mantiene el color naranja */
    font-size: 1.2em; /* Aumenta ligeramente el tamaño */
  }

  @media screen and (max-width: 768px) {
    font-size: clamp(1.85rem, 1vw, 1.2rem);
  }

  @media screen and (max-width: 480px) {
  font-size: clamp(1.55rem, 1vw, 1.2rem);
  text-align: center; /* Justifica el texto */
}

`;
