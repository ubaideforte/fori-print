import React, { useState } from "react";
import { Select } from "antd";
import styled from "styled-components";
const StyledSelect = styled(Select)`
  display: block;

  .ant-select,
  .ant-select-selector {
    outline: none !important;
    box-shadow: none !important;
    padding: 20px !important;
    height: 76px !important;
    font-size: 15px !important;
    border: ${props => props?.style?.border ? props.style.border : "1px solid #d4d4d4 !important"}
  }
  .ant-select-selector:focus {
    border: 1px solid #191d21 !important;
  }
  .ant-select-selection-search-input{
    outline: none !important;
    box-shadow: none !important;
    padding: 17px !important;
    height: 74px !important;
    font-size: 15px !important;
  }
  .ant-select-selection-search-input:focus{
    border: 1px solid #191d21 !important;
    border-radius: 2px;
  }
  .ant-select-selection-search-input:hover{
    border: 1px solid #191d21 !important;
    border-radius: 2px;
  }
  .ant-select-selection-search{
    position: absolute !important;
    top:0 !important;
    bottom:0 !important;
    left:0 !important;
    right:0 !important;
    width: 100%;
  }

`;

const { Option } = Select;

const SelectWrapper = (props) => {
  const { placeholder, onChange } = props;
  const [options, setOptions] = useState(props.options);

  const handleSearch = (val) => {
    const filteredOptions = props.options.filter((option) => {
      return option.name.toLowerCase().includes(val.toLowerCase());
    });
    setOptions(filteredOptions);
  };

  return (
    <StyledSelect
      onChange={onChange}
      showSearch
      onSearch={handleSearch}
      placeholder={placeholder}
    >
      {options.map((option) => {
        return <Option value={option.name}>{option.name}</Option>;
      })}
    </StyledSelect>
  );
};
SelectWrapper.defaultProps = {
  placeholder: "select",
  options: [],
  onChange: () => {},
};

export default SelectWrapper;
