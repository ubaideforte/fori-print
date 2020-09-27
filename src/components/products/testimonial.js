import React from "react";
import { Row, Col } from "antd";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Testimonial = () => {
  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#484848", margin: "16px 0 0 0" }}
      >
        Some of our great customers
      </h1>
      <p style={{ textAlign: "center", color: "#484848", margin: 0 }}>
        Lorem Ipsum dolor de sumut The Last React Carousel You'll Ever Need
      </p>
      <Row
        style={{
          width: "75%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {card.map((item) => (
          <Col span={4} style={{ marginTop: 16 }}>
            <img
              src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: 150, width: 150 }}
            />
          </Col>
        ))}
      </Row>

      <h1
        style={{ textAlign: "center", color: "#484848", margin: "16px 0 0 0" }}
      >
        Need assistance or help?
      </h1>
      <Row
        style={{
          width: "75%",
          margin: "auto",
          marginTop: 16,
        }}
        justify="space-between"
      >
        <Col span={8}>sale@printCart.com</Col>
        <Col span={8}>sale@printCart.com</Col>
        <Col span={8}>sale@printCart.com</Col>
      </Row>
    </div>
  );
};

export default Testimonial;
