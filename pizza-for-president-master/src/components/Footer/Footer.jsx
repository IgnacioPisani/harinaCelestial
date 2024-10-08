import React from 'react';
import {
	FaInstagram,
	FaWhatsapp,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
	SocialImage,
	SocialImageDiv,
} from './FooterElements';
import logo from '../../images/g2m.png';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialImageDiv>
					<SocialImage src={logo}/>
					</SocialImageDiv>
					<SocialIcons>
						<h1>Contactos:</h1>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Whatsapp'
								rel='noopener noreferrer'
							>
								<FaWhatsapp />
							</SocialIconLink>
						
						
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
