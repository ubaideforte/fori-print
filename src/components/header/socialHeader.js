import React from "react";
import { Row, Col } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

const iconStyle = {
  fontSize: 18,
  color: "#fff",
  margin: "0 12px",
  cursor: "pointer",
};

const SocialHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "#700BA5",
        height: 40,
        display: "flex",
        alignItems: "center",
        // flex: 1,
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col offset={4} span={8}>
          <FacebookFilled style={iconStyle} />
          <TwitterOutlined style={iconStyle} />
          <InstagramOutlined style={iconStyle} />
          <LinkedinFilled style={iconStyle} />
        </Col>
      </Row>
    </div>
  );
};

export default SocialHeader;
