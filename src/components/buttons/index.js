import { Button } from "antd";
import styled, { css } from "styled-components";

const ButtonWrapper = styled(Button)`
  margin: 0;
  color: ${(props) => props.color ?? "#fff"};
  background-color: ${(props) => props.backgroundColor ?? "#d81e32"};
  border: none;
  outline: none;
  box-shadow: none;
  font-weight: 600;
  height: 76px;
  padding: 0px 32px;
  font-size: 17px;
  transition: 0.4s;

  &.ant-btn[disabled],
  &.ant-btn[disabled]:hover,
  &.ant-btn[disabled]:focus,
  &.ant-btn[disabled]:active {
    background: #acacac;
    color: #21262c;
  }

  &:focus {
    color: ${(props) => props.color ?? "#fff"};
    background-color: ${(props) => props.backgroundColor ?? "#d81e32"};
  }

  &:hover {
    background-color: ${(props) => props.hoverColor ?? "#efa718"};
    color: ${(props) => (props.hoverColor != "#f4f4f4" ? "#fff" : "#21262C")};
  }
`;
export default ButtonWrapper;

export const SecondryButton = styled.button`
  background-color: transparent;
  border: 6px solid #eea019;
  font-weight: 600;
  color: #fff;
  height: 64px;
  letter-spacing: 8px;
  outline: none;
  box-shadow: none;
  font-size: 24px;
`;

export const RoundButton = styled.button`
  display: inline-block;
  border-radius: 50vmax;
  border: none;
  outline: none;
  background-color: ${(props) => props.backgroundColor ?? "#21262c"};
  width: ${(props) => (props.size ? props.size : "144px")};
  height: ${(props) => (props.size ? props.size : "144px")};
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor ?? "#efa718"};
    color: ${(props) => (props.hoverColor != "#f4f4f4" ? "#fff" : "#efa718")};
  }

  @media (max-width: 576px) {
    width: ${(props) => (props.size ? props.size : "64px")};
    height: ${(props) => (props.size ? props.size : "64px")};
  }
`;
