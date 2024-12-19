import styled from 'styled-components';

export const BrandsContainer = styled.div`
    min-height: 80vh;
    padding: 2rem calc((100vw - 1300px) / 2);
    background: #f4f4f4;
    color: #000;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const BrandsHeading = styled.h1`
    text-align: center; 
    color: #FF8806; 
    font-weight: bold;
    font-size: 5rem; 
    padding: 5.5rem 0 4.5rem;

    @media (max-width: 1200px) {
        font-size: 6rem;
        padding: 4rem 0 2.5rem; 
    }

    @media (max-width: 768px) {
        font-size: 5rem;
        padding: 2.5rem 0 1.5rem; 
    }

    @media (max-width: 480px) {
        font-size: 4rem;
        padding: 2rem 0 1rem; 
    } 
`;

export const BrandsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const BrandCard = styled.div`
    position: relative;
    margin: 2rem;
    line-height: 2;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 4px solid #fd8b06;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 0.5s ease-in forwards;

    &.loading {
        background: #f4f4f4;
    }

    &.loaded {
        background: white;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        background: #fd8b06;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;

export const BrandLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    z-index: 10;
`;

export const BrandImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .brand-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #FF8806;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const BrandImg = styled.img`
    max-height: 140px;
    max-width: 100%;
    object-fit: contain;
    border-radius: 10px 10px 0 0;
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 768px) {
        max-height: 100%;
        width: auto;
    }
`;