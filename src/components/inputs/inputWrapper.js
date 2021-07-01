import { Input } from "antd";
import styles from "../../../styles/application.module.css";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";

const InputWrapper = styled(Input)`
  outline: none !important;
  box-shadow: none !important;
  padding: 20px;
  height: 76px;
  font-size: 15px;
  border: 1px solid #d4d4d4;

  &:focus {
    border: 1px solid #191d21;
    transition: none !important;
  }

  .ant-input:hover{
    border-color: ${props => props.hoverColor ? props.hoverColor : "#d4d4d4 !important"};
  }

`;

export default InputWrapper;

const { TextArea } = Input;

export const TextAreaWrapper = styled(TextArea)`
  outline: none !important;
  box-shadow: none !important;
  padding: 20px;
  font-size: 15px;
  border: 1px solid #d4d4d4 !important;

  &:focus {
    border: 1px solid #191d21 !important;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: block;  
`;
