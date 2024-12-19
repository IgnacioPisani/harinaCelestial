import styled from 'styled-components';
import ImgBg from '../../images/hero/hero-harina-industrial.jpg';
import ImgLogo from '../../images/logo-g2m/g2mnaranja.webp';
import ImgHeroP from '../../images/eslogan/tu-familia.webp';


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
  padding: 2rem 2rem 2rem 2rem; /* Modifica el padding-right a 3rem */
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
  padding: 1rem;

  @media screen and (max-width: 768px) {
    bottom: 9rem;
    width: 220px;
  }

  @media screen and (max-width: 480px) {
    left: 50%; /* Centra horizontalmente */
    transform: translate(-50%, 50%); /* Asegura el centrado exacto */
    width: 140px; /* Ajusta el tamaño del logo */
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 4rem; /* Posición inicial */
  right: 3rem; /* Alineados a la derecha */
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

export const HeroP = styled.img.attrs({
  src: ImgHeroP,
  alt: "Eslogan de G2M",
})`
  position: absolute;
  bottom: 4rem; /* Coloca el logo encima de los párrafos */
  right: 3rem; /* Ajusta al borde derecho */
  width: 300px;
  height: auto;

  @media screen and (max-width: 768px) {
    bottom: 3rem;
    width: 170px;
  }

  @media screen and (max-width: 480px) {
    left: 50%; /* Centra horizontalmente */
    transform: translate(-50%, 50%); /* Asegura el centrado exacto */
    width: 110px; /* Ajusta el tamaño del logo */
  }
`;
