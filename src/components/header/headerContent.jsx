import React, { useState, useEffect } from "react";
import { Row, Col, Input, Dropdown } from "antd";
import styled from "styled-components";
import { logoImage } from "../../images";
import { SearchOutlined } from "../icons";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineUser, AiFillHome } from "react-icons/ai";

//--------------------------------------------------------*
// Note: A little part of menu styling is done in App.css *
//--------------------------------------------------------*

const StyledHeader = styled.div`
  padding-top: 12px;
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
    margin: 0;
  }
`;

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
  border-bottom: 1px solid #ececec;

  height: 60px;
  cursor: pointer;

  .nav-item {
    height: 58px;
    line-height: 58px;
    text-align: center;
    transition: 0.2s linear;
    background-color: #fff;
    box-sizing: border-box;

    :hover {
      background-color: rgba(255, 200, 200, 0.7);

      &:before {
        content: " ";
        height: 3px;
        background-color: red;
        width: 100%;
        display: block;
      }
    }
  }
`;

const StyledMenu = styled.div`
  background-color: #fff;
  position: relative;

  .menu-item {
    padding: 0px 24px;
    height: 48px;
    line-height: 48px;

    :hover {
      background-color: rgba(255, 200, 200, 0.7);

      &:before {
        content: " ";
        width: 3px;
        height: 48px;
        margin: 0;
        display: inline-block;
        background-color: red;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const menu = (
  <StyledMenu>
    <div className="menu-item">Product 1</div>
    <div className="menu-item">Product 2</div>
    <div className="menu-item">Product 3</div>
    <div className="menu-item">Product 4</div>
  </StyledMenu>
);

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
      <div style={{ backgroundColor: "#a716a0" }}>
        <div className="m-auto col-10 text-white fw-bold d-flex justify-content-between">
          <span className="m-0">Shahzad Ahmed (Memon)</span>
          <span className="m-0">+92 342 1234567</span>
        </div>
      </div>
      <StyledHeader className="container">
        <Row justify="space-between" align="middle">
          <Col span={3}>
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

      <StyledNavbar>
        <Row className="col-8 m-auto">
          <Col span={6}>
            <Dropdown overlay={menu}>
              <div className="nav-item">
                <AiFillHome /> &nbsp;&nbsp; Home
              </div>
            </Dropdown>
          </Col>

          <Col span={6}>
            <Dropdown overlay={menu}>
              <p className="nav-item">Shop</p>
            </Dropdown>
          </Col>

          <Col span={6}>
            <Dropdown overlay={menu}>
              <p className="nav-item">Apout</p>
            </Dropdown>
          </Col>

          <Col span={6}>
            <Dropdown overlay={menu}>
              <p className="nav-item">Career</p>
            </Dropdown>
          </Col>
        </Row>
      </StyledNavbar>
    </>
  );
};

export default HeaderContent;
