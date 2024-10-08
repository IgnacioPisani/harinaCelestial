import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #ff8806;
`;

export const FooterWrap = styled.div`
	padding: 16px 24px;
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
export const SocialImageDiv = styled.div`
    width: 30%;
`;
export const SocialImage = styled.img`
	display: block; /* Cambiado a block para que ocupe todo el ancho disponible */
	margin-left: 0; /* Asegura que no haya margen izquierdo */
	margin-right: auto; /* Empuja el margen derecho para alinear a la izquierda */
	width: 200px; /* Ancho fijo para la imagen */
`;

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: column; /* Cambiado a columna para que el título esté encima de los iconos */
    align-items: flex-end; /* Alinea los iconos a la derecha */
    width: 70%; 
    margin-left: auto; /* Asegura que se empuje a la derecha */
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 60px; /* Mantén el tamaño según lo necesites */
`;