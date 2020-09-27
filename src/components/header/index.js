import React from "react";
import MainHeader from "./mainHeader";
import NavigationBar from "./navigationBar";
import SocialHeader from "./socialHeader";
import { Row, Col } from "antd";
const HeaderWrapper = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <SocialHeader />
        </Col>

        <Col offset={4} span={14}>
          <MainHeader />
        </Col>

        <Col
          span={24}
          style={{
            backgroundColor: "#f4f4f4",
            border: "1px solid rgba(0,0,0,0.09)",
          }}
        >
          <Row>
            <Col offset={4}>
              <NavigationBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderWrapper;
