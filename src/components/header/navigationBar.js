import React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

const NavigationBar = () => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys="1"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Menu.Item key="1">Business Cards</Menu.Item>
      <SubMenu key="2" title="Clothing">
        <Menu.Item key="s1">Option 1</Menu.Item>
        <Menu.Item key="s2">Option 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="3">Marketing Materials</Menu.Item>
      <Menu.Item key="4">Packaging</Menu.Item>
      <Menu.Item key="5">Displays</Menu.Item>
      <Menu.Item key="6">Gifts</Menu.Item>
      <Menu.Item key="7">Office Essentials</Menu.Item>
    </Menu>
  );
};

export default NavigationBar;
