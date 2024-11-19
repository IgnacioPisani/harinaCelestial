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
  font-size: 7rem; 
  margin-bottom: 20px; 
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
