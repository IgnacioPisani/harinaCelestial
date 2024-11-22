import React from 'react';
import {
	BrandsContainer,
	BrandsHeading,
	BrandsWrapper,
	BrandCard,
	BrandImg,
	BrandInfo,
	BrandName,
    BrandLink,
	BrandButton,
	BrandImgWrapper
} from './BrandsElements';
function Brands({ heading, brands }) {
	return (
		<BrandsContainer>
			<BrandsHeading>{heading}</BrandsHeading>
			<BrandsWrapper>
				{brands.map((brand, index) => (
					<BrandCard key={index}>
						<BrandLink href={brand.url}>
							<BrandImgWrapper>
								<BrandImg src={brand.img} alt={brand.alt} />
							</BrandImgWrapper>
						</BrandLink>
					</BrandCard>
				))}
			</BrandsWrapper>
		</BrandsContainer>
	);
}

export default Brands;
