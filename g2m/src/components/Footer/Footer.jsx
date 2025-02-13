import React from 'react';
import Logo from '../../images/logo-g2m/g2m-transparente.webp';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope,FaPhoneAlt } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterSection,
  FooterLogo,
  FooterIcons,
  FooterContact,
  SocialIconLink,
} from './FooterElements';

function Footer() {
  return (
<FooterContainer>
  <FooterWrap>
    {/* Sección izquierda */}
    <FooterSection>
    <FooterLogo>
        <img src={Logo} alt="Logo G2M" />
      </FooterLogo>
    </FooterSection>

    {/* Logo centrado */}
    <FooterSection>
    <FooterContact><FaEnvelope />  g2m.celestial@gmail.com</FooterContact>
    <FooterContact><FaPhoneAlt /> +54 9 351 516 5078</FooterContact>
    </FooterSection>

    {/* Sección derecha */}
    <FooterSection>
      <FooterIcons>
        <SocialIconLink
          href="https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0"
          target="_blank"
          aria-label="Whatsapp"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.instagram.com/g2m.celestial/"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.facebook.com/profile.php?id=61564028819748&mibextid=ZbWKwL"
          target="_blank"
          aria-label="Facebook"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </SocialIconLink>
      </FooterIcons>
    </FooterSection>
  </FooterWrap>
</FooterContainer>


  );
}

export default Footer;
