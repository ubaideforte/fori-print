import React from "react";
import { Row, Col } from "antd";
const card2 = [1, 2, 3, 4, 5, 6, 7, 8];
const BestSellingProduct = () => {
  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#484848", margin: "16px 0 0 0" }}
      >
        Our Bestselling Products
      </h1>
      <p style={{ textAlign: "center", color: "#484848", margin: 0 }}>
        Lorem Ipsum dolor de sumut The Last React Carousel You'll Ever Need
      </p>
      <Row
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {card2.map((item) => (
          <Col span={6} style={{ marginTop: 12 }}>
            <img
              src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: 220, width: 220 }}
            />
            <h3 style={{ textAlign: "left", margin: 0 }}>
              <b>Card title</b>
            </h3>
            <h3 style={{ textAlign: "left", color: "#1890ff", margin: 0 }}>
              <b>$55</b>
            </h3>
            <p>Lorem ipsum dolor de sumut</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BestSellingProduct;
