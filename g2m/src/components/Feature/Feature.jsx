import React from 'react';
import { FeatureContainer, FeatureButton, FeatureP } from './FeatureElements';

function Feature() {
    const handleClick = () => {
        window.open('https://forms.gle/W4ijzR7bp1ERAgPT7', '_blank', 'noopener noreferrer');
    };

    return (
        <FeatureContainer>
            <FeatureP>Venta de insumos para panadería</FeatureP>
            {/* <p>Dejanos tu contacto</p> */}
            <FeatureButton onClick={handleClick}>
             Comuníquese con nosotros
            </FeatureButton>
        </FeatureContainer>
    );
}

export default Feature;