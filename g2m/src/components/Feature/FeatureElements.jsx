import styled from 'styled-components';
// import DividerPic from '../../images/divisores-pantalla/pan-cortado.webp';
import DividerPic from '../../images/divisores-pantalla/panes.jpg';

export const FeatureContainer = styled.div`
	background-image: 
		linear-gradient(to bottom, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 2%), /* Gradiente inferior corto */
	    linear-gradient(to top, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 20%), /* Gradiente superior corto */
		url(${DividerPic}); /* Imagen de fondo */
	background-color: #f4f4f4; /* Color de fondo para cubrir cualquier espacio adicional */

	height: 100vh; /* Incrementado para ocupar más espacio vertical */
	// max-height: 500px; /* Ajustado para pantallas grandes */
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-weight: bold;

	/* Espaciado interno en lugar de margen */
	padding: 12rem 1rem; /* Espaciado interno arriba y abajo */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);


	/* Ajustes para pantallas medianas */
	@media (max-width: 1000px) {
		height: 50vh; /* Ajustado para pantallas medianas */
		padding: 2rem 1rem; /* Reducido para pantallas medianas */
	}

	/* Ajustes para pantallas pequeñas */
	@media (max-width: 480px) {
		height: 35vh; /* Ajustado para pantallas pequeñas */
		padding: 1.5rem 1rem; /* Espaciado más reducido para móviles */
	}
`;

export const FeatureP = styled.h1`
	font-size: clamp(3rem, 4.2vw, 5rem);
	font-weight: bold;
	word-break: break-word;
	max-width: 60%; 
	margin-bottom: 2.5rem;
`;

export const FeatureButton = styled.button`
	font-size: 1.6rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #fd8b06;
	color: #fff;
	transition: 0.2s ease-out;
	border-radius: 10px;
	font-weight: 505; /* Cambiado a semi-bold */

	&:hover {
		color: #fff;
		background: #e67e00;
		transition: 0.2s ease-out;
		cursor: pointer;
	}
`;
