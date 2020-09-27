import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const IconWrapper = styled.img`
  width: 100% !important;
  height: 70vh;
  transition: 0.3s;
  margin-top: 4px;
  margin-bottom: 4px;
  background-size: contain;
`;

const settings = {
  infinite: false,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MainCarousel = (props) => {
  return (
    <div>
      <Slider {...settings}>
        <IconWrapper
          name="serviceIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVuOqwSVOwtXQC4POuiFPH-FQ6wWQOfsmHpA&usqp=CAU"
        />
        <IconWrapper
          name="serviceIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPz_3mlFd1Po2zNcCJyZlz-ZuVbFfPBDMPzg&usqp=CAU"
        />
      </Slider>
    </div>
  );
};

export default MainCarousel;
