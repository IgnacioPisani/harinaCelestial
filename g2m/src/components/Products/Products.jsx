import React from 'react';
import {
  ProductsContainer,
  ProductsHeading
} from './ProductsElements';
import CustomCarousel from '../Carousel/CustomCarousel';

function Products({ heading, data }) {
  return (

    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <CustomCarousel data={data} />
      </ProductsContainer>

  );
}

export default Products;
