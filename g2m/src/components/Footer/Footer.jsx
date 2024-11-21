import React from 'react';
import Logo from '../../images/logo-g2m/g2m-transparente.webp'
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
	FaWhatsapp,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogoImage,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogoImage >
							<img src={Logo} alt='Logo' />
						</SocialLogoImage>						
						<SocialIcons>
							<SocialIconLink
								href='https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0'
								target='_blank'
								aria-label='Whatsapp'
								rel='noopener noreferrer'
							>
								<FaWhatsapp />
							</SocialIconLink>
							<SocialIconLink
								href='https://www.instagram.com/g2m.celestial/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
