import React from "react";
import { Row, Col, Select } from "antd";
import { useLocation } from "react-router-dom";

const card2 = [1, 2, 3, 4, 5, 6, 7, 8];
const { Option } = Select;
const Products = (props) => {
  const location = useLocation();
  console.log(location.pathname.replace("/", " / "));
  return (
    <div>
      <Row
        style={{ width: "75%", margin: "auto", marginTop: 96 }}
        justify="space-between"
      >
        <Col>
          <h1>Products</h1>
        </Col>
        <Col>
          <Select defaultValue="One" style={{ width: 144 }}>
            <Option value={"1"}>One</Option>
            <Option value={"2"}>Two</Option>
            <Option value={"3"}>Three</Option>
            <Option value={"4"}>Four</Option>
            <Option value={"5"}>Five</Option>
            <Option value={"6"}>Six</Option>
          </Select>
        </Col>
      </Row>
      <Row
        style={{
          width: "75%",
          margin: "auto",
          marginTop: 16,
        }}
        justify="space-between"
      >
        {card2.map((item) => (
          <Col
            className="boxShadow-on-hover"
            span={7}
            style={{ marginTop: 12, padding: 12 }}
          >
            <img
              src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{
                height: 250,
                textAlign: "center",
                display: "block",
                width: "100%",
              }}
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

export default Products;
