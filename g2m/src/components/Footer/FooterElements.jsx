import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const SocialMedia = styled.section`
	max-width: 1300px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 10px auto; /* Reducir el margen */
	flex-wrap: wrap; /* Permitir que los elementos se ajusten en pantallas pequeñas */

	@media screen and (max-width: 820px) {
		flex-direction: column;
	} ;
`;

export const SocialLogoImage = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px; /* Reducir el margen */
	
	img {
		width: 80px; /* Ajustar el tamaño de la imagen */
		height: auto;
	}
`;

export const SocialIcons = styled.div`
	display: flex;
  justify-content: space-evenly; 
	align-items: center;
	width: 200px; /* Reducir el ancho */
`;


export const FooterContainer = styled.footer`
  background-color: #FF8806;
  padding: 20px 0;
  color: #fff;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 820px) {
    flex-direction: column; /* Cambiar la dirección a columna */
    text-align: center; /* Alinear el contenido centrado */
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:nth-child(1),
  &:nth-child(3) {
    align-items: center; /* Alinear al centro para pantallas pequeñas */
  }
`;

export const FooterContact = styled.p`
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
`;

export const FooterLogo = styled.div`
  img {
    width: 150px; /* Tamaño base */
    max-width: 100%; /* Escalar en pantallas pequeñas */
    height: auto;
  }
`;


export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    font-size: 24px;
    margin: 0 10px;
  }
`;

export const SocialIconLink = styled.a`
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
  }
`;
