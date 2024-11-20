import styled from 'styled-components';
import ImgBg from '../../images/hero/hero-harina-industrial.jpg';
import ImgLogo from '../../images/g2mnaranja.png';// HeroElements.js

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, 0.45), rgba(0, 0, 0, 0.02)), 
    linear-gradient(to top, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 20%), 
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

export const Logo = styled.img.attrs({
  src: ImgLogo,
  alt: "Logo de G2M"
})`
  position: absolute;
  top: 38%; 
  left: 8%; 
  transform: translateY(-50%);
  width: 300px; 
  height: auto;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));
  z-index: 10; 

  @media screen and (max-width: 1024px) {
    width: 300px; /* Reducir tamaño en pantallas medianas */
  }

  @media screen and (max-width: 768px) {
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0); /* Centrar en pantallas pequeñas */
    width: 200px; /* Tamaño reducido */
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.2);

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    padding: 0.8rem 2.5rem;
    font-size: 1rem;
  }
`;
