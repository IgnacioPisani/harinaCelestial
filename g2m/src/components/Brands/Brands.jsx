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
} from './BrandsElements';

function Brands({ heading, brands }) {
	return (
		<BrandsContainer>
        <BrandsHeading>{heading}</BrandsHeading>
			<BrandsWrapper>
				{brands.map((brand, index) => (
					<BrandCard key={index}>
						<BrandLink href="" target="_blank" rel="noopener noreferrer">
							<BrandImg src={brand.img} alt={brand.alt} />
						</BrandLink>
					</BrandCard>
				))}
			</BrandsWrapper>
		</BrandsContainer>
	);
}

export default Brands;
