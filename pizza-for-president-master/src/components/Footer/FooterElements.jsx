import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #FD8B06;
`;

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
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
	margin: 16px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	} ;
`;

export const SocialLogoImage = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 16px;

	img {
		width: 100px; /* Ajusta el tamaño de la imagen según sea necesario */
		height: auto;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const SocialIcons = styled.div`
	display: flex;
  justify-content: space-evenly; 
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 30px;
`;
