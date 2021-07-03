import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Input } from "antd";
import styled from "styled-components";
import { logoImage } from "../../images";
import { SearchOutlined } from "../icons";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const StyledMenu = styled(Menu)`
  text-align: center;
  background-color: transparent;
  border: none !important;
  outline: none !important;

  //------------------------//
  // Changing submenu title //
  //------------------------//
  .ant-menu-submenu {
    border: none !important;
  }

  .ant-menu-submenu-title {
    color: #fff;
    font-weight: 600;
    min-width: 150px;
    text-align: center;

    :hover {
      color: #efa718 !important;
    }
  }

  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    border: none !important;

    .ant-menu-submenu-title {
      color: #efa718;
    }
  }

  //----------------------------------//
  // Menu title When menu is selected //
  //----------------------------------//
  ant-menu-submenu-active,
  .ant-menu-submenu-selected {
    border: none !important;
    color: #efa718;

    .ant-menu-submenu-title {
      color: #efa718;
    }
  }

  .ant-menu-item-active,
  .ant-menu-item-selected {
    border: none !important;
  }
`;

const { SubMenu } = StyledMenu;

//--------------------------------------------------------*
// Note: A little part of menu styling is done in App.css *
//--------------------------------------------------------*

const StyledHeader = styled.div`
  .icon-box {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 32px;
    margin-right: 12px;
  }
  .title {
    font-size: 14px;
    margin: 0;
  }
  .sub-title {
    color: grey;
  }
`;

const HeaderContent = () => {
  const [scroll, setScroll] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        // using this condition to avoid state update frequently
        if (window.scrollY > 50 && window.scrollY < 150) {
          setScroll(window.scrollY);
        }
      });
    }
  });

  return (
    <>
      <div style={{ backgroundColor: "#a716a" }}>
        <div className="m-auto col-10 text-white fw-bold d-flex justify-content-between">
          <span className="m-0">Shahzad Ahmed (Memon)</span>
          <span className="m-0">+92 342 1234567</span>
        </div>
      </div>
      <StyledHeader className="container">
        <Row justify="space-between" align="middle">
          <Col span={4}>
            <img src={logoImage} className="img-fluid site-logo" />
          </Col>

          <Col span={10}>
            <Input size="large" addonAfter={<SearchOutlined />} className="search-box" />
          </Col>

          <Col>
            <div className="icon-box">
              <BiHeadphone className="icon" />

              <div>
                <p className="title">
                  <b>Help is here</b>
                </p>
                <sub className="sub-title">123456789</sub>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icon-box">
              <AiOutlineUser className="icon" />

              <div>
                <p className="title">Sign in</p>
                <sub className="sub-title">My Account</sub>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icon-box">
              <AiOutlineShoppingCart className="icon" />
              <p className="title">Cart</p>
            </div>
          </Col>
        </Row>
      </StyledHeader>
    </>
  );
};

export default HeaderContent;
