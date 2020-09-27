import React from "react";
import SocialFooter from "./socialFooter";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <>
      <Row style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        <Col offset={5} span={3}>
          <ul style={{ listStyle: "none", padding: "12px 0" }}>
            <li style={{ margin: "12px 0" }}>About us</li>
            <li style={{ margin: "12px 0" }}>Contact</li>
            <li style={{ margin: "12px 0" }}>Our Services</li>
            <li style={{ margin: "12px 0" }}>Careers</li>
            <li style={{ margin: "12px 0" }}>Home</li>
          </ul>
        </Col>

        <Col offset={2} span={5}>
          <ul style={{ listStyle: "none", padding: "12px 0" }}>
            <li style={{ margin: "12px 0" }}>About us</li>
            <li style={{ margin: "12px 0" }}>Contact</li>
            <li style={{ margin: "12px 0" }}>Our Services</li>
            <li style={{ margin: "12px 0" }}>Careers</li>
            <li style={{ margin: "12px 0" }}>Home</li>
          </ul>
        </Col>
      </Row>
      <SocialFooter />
    </>
  );
};

export default Footer;
