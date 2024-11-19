import React from 'react';
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductsCard,
  ProductsImg,
  ProductsInfo,
  ProductsTitle,
  ProductsDesc,
  ProductsPrice,
  ProductsButton,
} from './ProductsElements';
import Carousel from '../Carousel/Carousel';

function Products({ heading, data }) {
  return (
    <>
      <ProductsHeading>{heading}</ProductsHeading>
        <Carousel data={data} />
    </>
  );
}

export default Products;
