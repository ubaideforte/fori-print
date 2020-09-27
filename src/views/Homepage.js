import React from "react";

import MainCarousel from "../components/carousel/mainCarousel";
import Products from "../components/products/products";
import BestSellingProduct from "../components/products/bestSellingProdct";
import Testimonial from "../components/products/testimonial";

const Homepage = () => {
  return (
    <>
      <MainCarousel />
      <Products />
      <BestSellingProduct />
      <Testimonial />
    </>
  );
};

export default Homepage;
