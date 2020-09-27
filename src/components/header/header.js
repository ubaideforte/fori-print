import React from "react";
import { Input, Menu, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;
const { Search } = Input;
const Header = () => {
  const card = [1, 2, 3, 4, 5, 6, 7, 8];
  const card3 = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQEz1g51PAqD6w/company-background_10000/0?e=2159024400&v=beta&t=HpraTSlz2SB6Jsv2_6w_jlJ7p6LnVOuWtUZ0r0fgK5M"
        style={{ width: "100%", height: "70vh", backgroundSize: "contain" }}
      />
      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {card.map((item) => (
          <div>
            <img
              src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: 100, width: 100 }}
            />
            <h3 style={{ textAlign: "left" }}>
              <b>Card title</b>
            </h3>
          </div>
        ))}
      </div>

      <h2>
        <b>Some of our great customers</b>
      </h2>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a
      </p>

      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {card3.map((item) => (
          <div>
            <img
              src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: 120, width: 150 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
