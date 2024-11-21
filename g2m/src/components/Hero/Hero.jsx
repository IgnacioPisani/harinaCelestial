import React, { useState } from 'react';
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


	return (
		<HeroContainer>
			
			<Logo />
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
