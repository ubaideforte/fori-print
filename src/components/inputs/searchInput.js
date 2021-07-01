// This input is used in search modal
// import React from 'react'
import { Input } from "antd";
import styled from "styled-components";

const SearchInput = styled(Input)`
  box-shadow: none !important;
  outline: none !important;
  border: 1px solid #000 !important;

  background: #fff !important;
  padding: 12px 0 !important;

  color: #000;
  font-size: 20px;

  .ant-input {
    color: #efa718 !important;
    font-size: 24px;
    background: transparent !important;
  }
`;

export default SearchInput;
