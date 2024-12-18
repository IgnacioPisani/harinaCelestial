import styled from 'styled-components';


export const BrandsHeading = styled.h1`
  text-align: center; 
  color: #FF8806; 
  font-weight: bold;
  font-size: 5rem;  
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
	padding: 2rem calc((100vw - 1300px) / 2);
	background: #f4f4f4;
	color: #000;

	@media (max-width: 768px) {
		padding: 1rem; /* Reduce el padding en móvil */
	}
`;


export const BrandsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;



export const BrandLink = styled.a`
	display: block;
	width: 100%;
	height: 100%;
	text-decoration: none; /* Para eliminar el subrayado en el enlace */
	z-index: 10;
`;
export const BrandCard = styled.div`
	position: relative;
	margin: 2rem;
	line-height: 2;
	width: 350px;
	height: 350px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border: 4px solid #fd8b06;
	overflow: hidden;
	transition: transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
		background: #fd8b06;
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
	}
`;

export const BrandImgWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center; /* Centra la imagen tanto horizontal como verticalmente */
`;

export const BrandImg = styled.img`
	max-height: 140px;
	max-width: 100%; /* No excede el ancho del contenedor */
	object-fit: contain; /* Ajusta la imagen sin deformarla */
	border-radius: 10px 10px 0 0;

	@media (max-width: 768px) {
		max-height: 100%; /* Hace que la imagen ocupe todo el alto en móvil */
		width: auto; /* Mantiene la relación de aspecto */
	}
`;



export const BrandName = styled.h2`
	font-weight: 500;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: #000;
	text-align: center; /* Centra el texto */
`;
