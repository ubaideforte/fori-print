import React from "react";
import { Row, Col } from "antd";

const MissionAndVision = () => {
  return (
    <>
      <Row justify="space-around">
        <Col xs={24} sm={24} md={12} className="our-mission">
          <p className="heading-3 font-weight-bold m-0">OUR MISSION</p>
          <p className="heading-10 mt-5 col-xl-8 col-lg-10 mx-auto">
            To work towards progressing individual mindsets, in order to path
            ways for humanity's destined future.
          </p>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          className="our-vision"
          style={{ backgroundColor: "#d81e32", color: "#fff" }}
        >
          <p className="heading-3 font-weight-bold m-0">OUR VISION</p>
          <p className="heading-10 mt-5 col-xl-8 col-lg-10 mx-auto">
            Evolve the informed mindset towards conclusive knowledge base.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default MissionAndVision;
