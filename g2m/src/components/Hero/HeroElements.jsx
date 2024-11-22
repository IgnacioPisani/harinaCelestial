import styled from 'styled-components';
import ImgBg from '../../images/hero/hero-harina-industrial.jpg';
import ImgLogo from '../../images/logo-g2m/g2mnaranja.webp';

export const HeroContainer = styled.div`
  background:linear-gradient(to top, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 20%), 
  url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column; /* Apila los elementos verticalmente */
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Logo = styled.img.attrs({
  src: ImgLogo,
  alt: "Logo de G2M"
})`
  width: 350px;
  height: auto;
  margin-bottom: 1.5rem; /* Espacio entre el logo y el texto */

  @media screen and (max-width: 768px) {
    width: 150px; /* Tamaño reducido en pantallas pequeñas */
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Centra el texto debajo del logo */
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  width: 100%;
`;
export const HeroP = styled.p`
  font-size: clamp(1rem, 1.25vw, 1.5rem); /* Reducir el tamaño a la mitad */
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.2);
  margin: 0;
  background-color: #ff8c00; /* Fondo naranja */
  padding: 0.5rem 1rem; /* Espaciado interno reducido */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra */
  display: inline-block; /* Asegura que el fondo se ajuste al contenido */

  @media screen and (max-width: 768px) {
    font-size: 0.75rem; /* Ajustar tamaño para pantallas pequeñas */
    padding: 0.4rem 0.8rem; /* Espaciado interno reducido en pantallas pequeñas */
  }
`;
