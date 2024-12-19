import styled from 'styled-components';
// import DividerPic from '../../images/divisores-pantalla/pan-cortado.webp';
import DividerPic from '../../images/divisores-pantalla/panes.jpg';


export const FeatureContainer = styled.div`
	background-image: 
		linear-gradient(to bottom, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 20%), /* Gradiente inferior corto */
	    linear-gradient(to top, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0) 20%), /* Gradiente superior corto */
		url(${DividerPic}); /* Imagen de fondo */
	background-color: #f4f4f4; /* Color de fondo para cubrir cualquier espacio adicional */

	height: 130vh; /* Incrementado para ocupar más espacio vertical */
	max-height: 500px; /* Ajustado para pantallas grandes */
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// color: #fff;
	text-align: center;

	/* Espaciado interno en lugar de margen */
	padding: 12rem 1rem; /* Espaciado interno arriba y abajo */

	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
	}

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



// export const FeatureContainer = styled.div`
// 	// background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
// 	// 	url(${DividerPic});
// 	// background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), /* Gradiente blanco superior */
// 	// 	linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), /* Gradiente blanco inferior */
// 	// 	url(${DividerPic});

// 	background-image: 
// 		linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), /* Gradiente superior */
// 		linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), /* Gradiente inferior */
// 		url(${DividerPic});
// 	height: 100vh;
// 	// max-height: 500px;
// 	background-position: center;
// 	background-size: cover;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	color: #fff;
// 	text-align: center;
// 	padding: 0 1rem;

// 	h1 {
// 		font-size: clamp(3rem, 5vw, 5rem);
// 	}

// 	p {
// 		margin-bottom: 1rem;
// 		font-size: clamp(1rem, 3vw, 2rem);
// 	}
// `;

export const FeatureButton = styled.button`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #ffc500;
	color: #000;
	transition: 0.2s ease-out;

	&:hover {
		color: #fff;
		background: #e31837;
		transition: 0.2s ease-out;
		cursor: pointer;
	}


`;
