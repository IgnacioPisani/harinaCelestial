import React, { useState } from 'react';
import NavBar from '../NavbarResponsive/NavbarResponsive';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
	Logo,
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			
			<Logo />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroContent>
				{ <HeroItems>
					
					<HeroP>Insumos para panadería</HeroP>
					{/* <HeroBtn>Place Order</HeroBtn> */}
				</HeroItems> }
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
