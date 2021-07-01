// A full screen search modal visible when user click the search button on header.
import React from "react";
import { Modal } from "antd";
import SearchInput from "../inputs/searchInput";
import { SearchOutlined, CloseOutlined } from "../icons";

import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background: transparent !important;
    box-shadow: none !important;

    .ant-modal-body {
      background: transparent !important;
    }
  }
`;

const SearchModal = (props) => {
  const { visible, onCancel } = props;
  return (
    <StyledModal
      visible={visible}
      closable={false}
      centered
      footer={null}
      title={null}
      width={800}
      bodyStyle={{ borderBottom: "1px solid #fff", padding: 0 }}
      maskStyle={{ backgroundColor: "rgba(25, 29, 33, 0.9)" }}
      onCancel={onCancel}
      maskClosable={false}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CloseOutlined
          style={{
            alignSelf: "flex-end",
            textAlign: "right",
            fontSize: 20,
            color: "#fff",
            cursor: "pointer",
          }}
          className="spin-animation"
          onClick={onCancel}
        />
        <SearchInput
          placeholder="search"
          prefix={<SearchOutlined style={{ marginRight: 12 }} />}
        />
      </div>
    </StyledModal>
  );
};

export default SearchModal;
