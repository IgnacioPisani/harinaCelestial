import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
    const handleClick = () => {
        window.open('https://forms.gle/jLZ5KAZtkUi2HnWS8', '_blank', 'noopener noreferrer');
    };

    return (
        <FeatureContainer>
            <h1>Venta de insumos para panadería</h1>
            {/* <p>Dejanos tu contacto</p> */}
            <FeatureButton onClick={handleClick}>
                Envíanos tu consulta
            </FeatureButton>
        </FeatureContainer>
    );
}

export default Feature;