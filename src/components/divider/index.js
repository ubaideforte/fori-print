import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .line {
    height: 1px;
    background-color: #000;
    width: 200px;
  }

  .text {
    font-weight: 600;
    font-size: 16px;
    margin: 0 16px;
  }
`;

const Divider = ({ children }) => {
  return (
    <StyledDivider>
      <div className="line" />
      <div className="text">{children}</div>
      <div className="line" />
    </StyledDivider>
  );
};

export default Divider;
