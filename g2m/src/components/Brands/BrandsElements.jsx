import styled from 'styled-components';


export const BrandsHeading = styled.h1`
  text-align: center; 
  color: #FF8806; 
  font-size: 7rem; 
  margin-bottom: 30px;  
    @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;



export const BrandsContainer = styled.div`
	min-height: 80vh;
	padding-right,padding-left: 5rem calc((100vw - 1300px) / 2);
	background:#f4f4f4;
	color: #000;
`;

export const BrandsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

export const BrandCard = styled.div`
	position: relative;
	margin: 2rem;
	line-height: 2;
	width: 350px;
	height:  350px;
	border-radius: 10px; /* Bordes redondeados en la tarjeta */
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border: 4px solid #fd8b06; /* Borde de color naranja */
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer; /* Cambia el cursor para indicar que es un botón */

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
		background: #fd8b06; /* Color de fondo naranja en hover */
	}
`;

export const BrandLink = styled.a`
	display: block;
	width: 100%;
	height: 100%;
	text-decoration: none; /* Para eliminar el subrayado en el enlace */
	z-index: 10;
`;

export const BrandImg = styled.img`
	height: 140px; /* Altura fija para la imagen */
	width: auto; /* Ancho automático para mantener la relación de aspecto */
	object-fit: cover;
	border-radius: 10px 10px 0 0; /* Bordes redondeados en la parte superior */
	margin: 0 auto; /* Centra la imagen */
	margin-top: 100px;
	margin-bottom: 100px;
	display: block; /* Hace que el margen funcione para centrar */
`;

export const BrandName = styled.h2`
	font-weight: 500;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: #000;
	text-align: center; /* Centra el texto */
`;
