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
          <HeroP>
          <span>CALIDAD </span> EN CADA GRANO.
          </HeroP>
          <HeroP>
          <span>AMOR </span> EN CADA PLATO.
          </HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;