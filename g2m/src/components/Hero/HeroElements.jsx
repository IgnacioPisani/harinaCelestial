import styled from 'styled-components';
// import ImgBg from '../../images/hero/hero-harina-industrial.jpg';
import ImgBg from '../../images/hero/hero-panes.jpg';
import ImgLogo from '../../images/logo-g2m/g2mnaranja.webp';

// Contenedor principal del Hero
export const HeroContainer = styled.div`
  background: url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  align-items: center; /* Centra el contenido verticalmente */
  position: relative;
  width: 100%;
  overflow-x: hidden;

  /* Superposición oscura */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro con transparencia */
    z-index: 1;
  }

  /* Asegura que el contenido esté sobre la superposición */
  > * {
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    background-position: 50% center;
  }

  @media screen and (max-width: 480px) {
    background-position: 70% center;
  }
`;

// Logo centrado
export const Logo = styled.img.attrs({
  src: ImgLogo,
  alt: "Logo de G2M",
})`
  width: 260px;
  height: auto;
  margin-bottom: 30px; /* Agrega espacio debajo del logo */
  // padding: 30px; /* Agrega espacio alrededor del logo */

  @media screen and (max-width: 768px) {
    width: 220px;
     margin-bottom: 20px;
    padding: 15px; /* Ajusta el padding en pantallas más pequeñas */
  }

  @media screen and (max-width: 480px) {
    width: 140px;
    margin-bottom: 1px;
    padding: 10px; /* Ajusta el padding en pantallas aún más pequeñas */
  }
`;


// Contenido del Hero
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los elementos horizontalmente */
  text-align: center;

  @media screen and (max-width: 480px) {
    gap: 1rem; /* Espaciado entre elementos en pantallas pequeñas */
  }
`;

// Elementos adicionales en el Hero (como slogan, texto, etc.)
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroP = styled.p`
  font-size: 1.5rem;
  color: white;
  text-transform: uppercase;
  line-height: 1.5;
  margin: 0; /* Elimina márgenes adicionales */

  /* Resalta las palabras específicas */
  span {
    color: #e67e00; /* Color naranja para las palabras resaltadas */
    font-size: 1.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  /* Diseño para pantallas grandes */
  @media screen and (min-width: 769px) {
    display: inline; /* Coloca los textos en línea */
  }

  /* Diseño para pantallas pequeñas */
  @media screen and (max-width: 768px) {
    display: block; /* Coloca los textos uno debajo del otro */
    text-align: center; /* Opcional: centra el texto */
  }
`;

