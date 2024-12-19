import styled from 'styled-components';

export const ProductsContainer = styled.div`
	background:#f4f4f4;
`;

export const ProductsWrapper = styled.div`
`;

export const ProductsCard = styled.div`
`;

export const ProductsImg = styled.img`
`;

export const ProductsHeading = styled.h1`
  text-align: center; 
  color: #FF8806; 
  font-weight: bold;
  font-size: 5rem; 
  padding: 4rem 0 2rem; /* Más espacio arriba (3rem) que abajo (2rem) */

  @media (max-width: 1200px) {
    font-size: 6rem;
    padding: 4rem 0 2.5rem; 
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    padding: 2.5rem 0 1.5rem; 
  }

  @media (max-width: 480px) {
    font-size: 4rem;
    padding: 2rem 0 1rem; 
  } 
`;



export const ProductsTitle = styled.h2`
`;

export const ProductsInfo = styled.div`
`;


export const ProductsDesc = styled.p`
	margin-bottom: 1rem;
`;

export const ProductsPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;

export const ProductsButton = styled.button`
	font-size: 1rem;
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
`;
