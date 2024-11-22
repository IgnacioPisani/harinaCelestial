import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #FD8B06;
	padding: 10px 0; /* Reducir el padding vertical */
`;

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 20px; /* Reducir el padding horizontal */
`;

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

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px; /* Reducir el tamaño de los íconos */
`;
