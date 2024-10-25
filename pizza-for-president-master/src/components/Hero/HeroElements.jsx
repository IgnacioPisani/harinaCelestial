import styled from 'styled-components';
import ImgBg from '../../images/hero/hero-harina-industrial.jpg';
import ImgLogo from '../../images/logo-g2m/g2m-solido.png';

export const HeroContainer = styled.div`
		
	background: linear-gradient(to right, rgba(255, 255, 255, 0.45), rgba(0, 0, 0, 0.02)), 
		url(${ImgBg});
	height: 100vh;
	background-position: center;
	background-size: cover;
	position: relative;
	z-index: 1;
`;

export const Logo = styled.img.attrs({
	src: ImgLogo,
	alt: "Logo de G2M"
})`
   position: absolute;
   top: 38%; /* Adjust this value to set spacing from the top */
   left: 8%; /* Adjust this value to set spacing from the left */
   transform: translateY(-50%); /* Centra verticalmente el logo */
   width: 450px; /* Set the size of the logo */
   height: auto;
   filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));
   z-index: 10; /* Ensures it appears above other elements */   
`;

// export const Logo = styled.img.attrs({
// 	src: ImgLogo,
// 	alt: "Logo de G2M"
// })`
//    position: absolute;
//    top: 20px; /* Adjust this value to set spacing from the top */
//    left: 20px; /* Adjust this value to set spacing from the left */
//    width: 100px; /* Set the size of the logo */
//    height: auto;
//    z-index: 10; /* Ensures it appears above other elements */
// `;

export const HeroContent = styled.div`
	height: calc(100vh-80px);
	max-height: 100%;
	/* width: 100vw; */
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;

	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
`;

export const HeroH3 = styled.h3`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
`;

export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.2);
`;

export const HeroBtn = styled.button`
	font-size: 1.4rem;
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
