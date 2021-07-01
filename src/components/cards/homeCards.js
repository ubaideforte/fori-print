import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  .card-image {
    background-image: url(${({ cardImage }) => cardImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: -webkit-fill-available;
    height: 300px;
  }

  .price {
    background-color: #fff;
    padding: 4px 16px;
    margin: 8px 0 0 8px;
    display: inline-block;
    border-radius: 16px;
    font-size: 12px;
  }

  .item-name {
    margin: 12px 0 0 0;
    font-weight: 600;
  }
`;

const HomeCard = (props) => {
  const { cardImage, price, itemName, sub } = props;
  return (
    <StyledCard cardImage={cardImage}>
      <div className="card-image">
        <p className="price">{price}</p>
      </div>
      <p className="item-name">{itemName}</p>
      <p className="item-name">{sub}</p>
    </StyledCard>
  );
};

export default HomeCard;
