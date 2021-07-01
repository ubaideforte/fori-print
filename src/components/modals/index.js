import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "../icons";

const StyledModal = styled(Modal)`
  padding: 0;

  .ant-modal-content {
    background: transparent !important;
    box-shadow: none !important;

    .ant-modal-body {
      background: transparent !important;
    }
  }
`;

const BasicModal = (props) => {
  const { visible, onCancel } = props;

  return (
    <StyledModal
      visible={visible}
      closable={false}
      centered
      footer={null}
      title={null}
      width={"auto"}
      //   bodyStyle={{ borderBottom: "1px solid #fff", padding: 0 }}
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
          className="spin-animation mb-4 mr-2"
          onClick={onCancel}
        />
        {props.children}
      </div>
    </StyledModal>
  );
};

export default BasicModal;
