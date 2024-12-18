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
          <HeroP/>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;