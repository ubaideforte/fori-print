import { Checkbox } from "antd";
import styled from "styled-components";

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #343434 !important;
    border: 1px solid #343434;
  }

  .ant-checkbox-inner{
    padding: 12px;
  }

  .ant-checkbox:hover .ant-checkbox-inner, 
  .ant-checkbox-input:focus + .ant-checkbox-inner{
    border: 1px solid #343434; !important;
  }
  
  .ant-checkbox-checked::after {
    border: 1px solid #343434; !important;
  }
  span {
    font-size: 12px;
    color: #343434;
  }
`;

export default StyledCheckbox;
