import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<NavBar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroContent>
				<HeroItems>
					<HeroH1>G2M</HeroH1>
					<h2>celestial</h2>
					<HeroP>Insumo panadería</HeroP>
					{/* <HeroBtn>Place Order</HeroBtn> */}
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
