import React, { useState, useEffect } from 'react';
import {
    BrandsContainer,
    BrandsHeading,
    BrandsWrapper,
    BrandCard,
    BrandImg,
    BrandLink,
    BrandImgWrapper
} from './BrandsElements';

function Brands({ heading, brands }) {
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const preloadImages = async () => {
            await Promise.all(
                brands.map(
                    (brand, index) =>
                        new Promise((resolve) => {
                            const img = new Image();
                            img.src = brand.img;
                            img.onload = () => {
                                setLoadedImages(prev => ({ ...prev, [index]: true }));
                                resolve();
                            };
                            img.onerror = resolve;
                        })
                )
            );
        };

        preloadImages();
    }, [brands]);

    return (
        <BrandsContainer>
            <BrandsHeading>{heading}</BrandsHeading>
            <BrandsWrapper>
                {brands.map((brand, index) => (
                    <BrandCard 
                        key={index}
                        className={loadedImages[index] ? 'loaded' : 'loading'}
                    >
                        <BrandLink href={brand.url}>
                            <BrandImgWrapper>
                                {!loadedImages[index] && (
                                    <div className="brand-placeholder">
                                        <div className="loading-spinner"></div>
                                    </div>
                                )}
                                <BrandImg
                                    src={brand.img}
                                    alt={brand.alt}
                                    style={{
                                        opacity: loadedImages[index] ? 1 : 0
                                    }}
                                />
                            </BrandImgWrapper>
                        </BrandLink>
                    </BrandCard>
                ))}
            </BrandsWrapper>
        </BrandsContainer>
    );
}

export default Brands;