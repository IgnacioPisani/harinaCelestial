import styled from 'styled-components';
import DividerPic from '../../images/divisores-pantalla/panes.jpg';

export const FeatureContainer = styled.div`
	background-image: 
		linear-gradient(to bottom, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 2%), /* Gradiente inferior corto */
	    linear-gradient(to top, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 20%), /* Gradiente superior corto */
		url(${DividerPic}); /* Imagen de fondo */
	background-color: #f4f4f4; /* Color de fondo para cubrir cualquier espacio adicional */
	height: 100vh; /* Ocupa la altura completa de la ventana */
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
	padding: 12rem 2rem; /* Espaciado interno */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

	/* Ajustes para pantallas medianas */
	@media (max-width: 1000px) {
		height: 70vh; /* Reduce la altura */
		padding: 8rem 1.5rem; /* Reduce el espaciado */
	}

	/* Ajustes para pantallas pequeñas */
	@media (max-width: 768px) {
		height: 50vh; /* Ajusta aún más la altura */
		padding: 6rem 1rem; /* Reduce el espaciado */
	}

	/* Ajustes para pantallas muy pequeñas */
	@media (max-width: 480px) {
		height: 40vh; /* Menor altura para móviles */
		padding: 4rem 1rem; /* Espaciado más compacto */
	}
`;

export const FeatureP = styled.h1`
	font-size: clamp(2.5rem, 5vw, 4rem); /* Ajusta el tamaño de la fuente dinámicamente */
	font-weight: bold;
	word-break: break-word; /* Evita desbordamientos de texto */
	max-width: 80%; /* Más espacio para texto en pantallas pequeñas */
	margin-bottom: 2rem;

	/* Ajustes para pantallas pequeñas */
	@media (max-width: 480px) {
		font-size: clamp(2rem, 4vw, 3.5rem); /* Tamaño más pequeño en móviles */
	}
`;

export const FeatureButton = styled.button`
	font-size: clamp(1.4rem, 2.5vw, 1.6rem); /* Ajusta el tamaño del botón dinámicamente */
	padding: 0.6rem 2.5rem;
	border: none;
	background: #fd8b06;
	color: #fff;
	transition: 0.2s ease-out;
	border-radius: 10px;
	font-weight: 505; /* Semi-bold */

	&:hover {
		color: #fff;
		background: #e67e00;
		transition: 0.2s ease-out;
		cursor: pointer;
	}

	/* Ajustes para pantallas pequeñas */
	@media (max-width: 480px) {
		padding: 0.5rem 2rem; /* Botón más compacto */
		font-size: 1.2rem; /* Fuente más pequeña */
	}
`;
