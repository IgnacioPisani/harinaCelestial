import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroP,
  Logo,
} from './HeroElements';

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <Logo />
        <HeroItems>
        <div className="hero-text">
  <HeroP>
    <span>CALIDAD</span> EN CADA GRANO, 
  </HeroP>
  <HeroP>
    <span> AMOR</span> EN CADA PLATO.
  </HeroP>
</div>

        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
