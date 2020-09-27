import React from "react";
import MainHeader from "./mainHeader";
import NavigationBar from "./navigationBar";
import SocialHeader from "./socialHeader";
import { Row, Col } from "antd";
const HeaderWrapper = () => {
  return (
    <div>
      <SocialHeader />
      <Row>
        <Col offset={4} span={16}>
          <MainHeader />
        </Col>
        <Col offset={4} span={20}>
          <NavigationBar />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderWrapper;
