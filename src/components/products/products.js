import React from "react";
import { Row, Col, Space } from "antd";
import { Link } from "react-router-dom";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const Products = () => {
  return (
    <Row style={{ width: "70%", margin: "auto" }} className="space-align-block">
      {card.map((item) => (
        <Col span={3} key={item}>
          <Link to="/products">
            <img
              src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: 84, width: 80, margin: "8px 0" }}
            />
            <h3 style={{ fontSize: 12, color: "#acacac" }}>
              <b>Card title</b>
            </h3>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
