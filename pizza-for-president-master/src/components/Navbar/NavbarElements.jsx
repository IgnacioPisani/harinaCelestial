import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { LuWheat } from "react-icons/lu";
import ImgLogo from '../../images/logo-g2m/g2m-transparente.png';


export const Nav = styled.nav`
	background-color: #FD8B06;
	height: 66px;
	// padding: 0 20px
	display: flex;
	// justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	// font-weight: 600;
	z-index: 20;
`;

export const Logo = styled.img.attrs({
	src: ImgLogo,
	alt: "Logo de G2M"
})`
//    position: absolute;
//    top: 0.01%; /* Adjust this value to set spacing from the top */
//    left: 20px; /* Adjust this value to set spacing from the left */
   width: 70px; /* Set the size of the logo */
   height: auto;
   margin: 20px;
   z-index: 10; /* Ensures it appears above other elements */
   
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 1.5rem;
	display: flex;
	align-items: left;
	text-decoration: none;
	cursor: pointer;
	font-weight: 530;
	transition: color 0.3s ease, background-color 0.3s ease; /* Transición suave */
	padding: 4px 5px; /* Añade espacio para aumentar el ancho del fondo */
	&:hover {
		// color: #d3d3d3; /* Cambia el color del texto a un gris claro en hover */
		color: #f0f0f0; /* Un gris muy claro */
		// color: #000; /* Cambia el color al pasar el ratón */
		background-color: rgba(255, 255, 255, 0.2); /* Fondo suave en hover */
		border-radius: 6px; /* Bordes redondeados */
		font-weight: 570;
	}
`;

// export const NavLink = styled.div`
// 	color: #fff;
// 	font-size: 2rem;
// 	display: flex;
// 	align-items: left;
// 	text-decoration: none;
// 	cursor: pointer;
// 	transition: color 0.3s ease, background-color 0.3s ease; /* Transición suave */
// 	&:hover {
// 		color: #000; /* Cambia el color al pasar el ratón */
// 		background-color: rgba(255, 255, 255, 0.2); /* Fondo suave en hover */
// 		border-radius: 5px; /* Bordes redondeados */
// 	}
// `;
// export const NavLinksContainer = styled.div`
//     display: flex;
// 	align-items: left;
// 	margin: 0px 5px
// 	color: #ffff;
//     font-size: 1.4rem;
//     text-decoration: none; /* Elimina el subrayado */
//     cursor: pointer;
//     transition: color 0.3s ease, background-color 0.3s ease; /* Transición suave */
//     &:hover {
//         color: #000; /* Cambia el color al pasar el ratón */
//         background-color: rgba(255, 255, 255, 0.2); /* Fondo suave en hover */
//         border-radius: 5px; /* Bordes redondeados */
//     }
// `;

export const NavIcon = styled.div`
	display: flex;
	top: 3.7%;
	// left: 10%;
	cursor: pointer;
	color: #fff;
	text-decoration: none;
	margin: 0 10px;

	// p {
	// 	transform: translate(-175%, 100%);
	// 	font-weight: bold;
	// }
`;

// export const Bars = styled(LuWheat)`
// 	font-size: 2rem;
// 	transform: translate(-50%, -15%);
// `;
