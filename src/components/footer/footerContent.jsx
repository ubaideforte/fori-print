import React from "react";
import { Row, Col } from "antd";
import {
  SendOutlined,
  PhoneOutlined,
  MailOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { SocialIcons } from "../icons/socialIcons";

const StyledFooter = styled.footer`
  display: block;
  * {
    a {
      color: #fff;
      transition: 0.5s;
      :hover {
        color: #eea019;
      }
    }
    p {
      color: #fff;
      margin: 0;
    }
  }

  .main-footer {
    background-color: #21262c;
    color: #fff;

    .contact-item {
      display: flex;
      justify-content: start;
      align-items: center;

      svg {
        color: #eea019;
        font-size: 24px;
      }

      p {
        font-size: 16;
        margin: 0;
        transition: 0.5s;

        :hover {
          color: #eea019;
        }
      }
    }

    //----------------------//
    // Link Section Styling //
    //----------------------//
    .link-section {
      ul {
        list-style: none;
        li {
          margin-bottom: 12px;

          :before {
            content: "";
            background-color: #eea019;
            font-weight: bold;
            display: inline-block;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
    }
  }

  //-----------------------*
  // Narrow Footer Styling *
  //-----------------------*
  .narrow-footer {
    background-color: #191d21;

    p {
      font-size: 18px;
      font-weight: 600;
    }

    @media (max-width: 576px) {
      p {
        font-size: 16px;
        font-weight: 600;
      }
    }

    @media (min-width: 768px) {
      p {
        font-size: 16px;
      }
    }
  }
`;

const FooterContent = () => {
  return (
    <StyledFooter>
      <div className="main-footer">
        <Row justify="space-between" className="p-5 py-md-5 pl-md-4 p-lg-5">
          <Col xs={24} sm={24} md={8} lg={9} className="mb-5">
            <h4 style={{ color: "#fff" }}>About Emerge</h4>

            <div className="mt-4 mt-sm-5">
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
                className="mb-4 mb-sm-5"
              >
                Emerge is the movement for promoting a society where everyone is
                encouraged to observe, reflect and act in order to come to right
                conclusions.
              </p>

              {/* Dark Social Icons */}
              <SocialIcons className="dark-social-icons" />
            </div>
          </Col>

          <Col xs={24} sm={24} md={9} lg={6} className="mb-5">
            <h4 style={{ color: "#fff" }}>Contacts</h4>

            <div className="mt-4 mt-sm-5">
              <a className="contact-item mb-4">
                <SendOutlined
                  style={{
                    transform: "rotate(320deg)",
                  }}
                  className="mr-3"
                />
                <p>
                  Mezzanine floor, Cornish Building,
                  <br /> Comm. Lane 3, Clifton Block 2, Karachi 75600
                </p>
              </a>

              <a href="tel:+922135863176" className="contact-item mb-4">
                <PhoneOutlined
                  style={{
                    transform: "rotate(90deg)",
                  }}
                  className="mr-3"
                />
                <p>+92 213 586 3176</p>
              </a>

              <a
                href="mailto:info@emergeforward.com"
                className="contact-item mb-4"
              >
                <MailOutlined className="mr-3" />
                <p>info@emergeforward.com</p>
              </a>

              <a
                href="https://emerge-forward.vercel.app/application"
                target="blank"
                className="contact-item mb-4"
              >
                <UserAddOutlined className="mr-3" />
                <p>Become a member</p>
              </a>
            </div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={6}
            lg={5}
            className="mb-5"
            className="link-section"
          >
            <h4 style={{ color: "#fff" }}>Links</h4>

            <div className="mt-4 mt-sm-5">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/emerge-journey">
                    <a>Emerge Journey</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application">
                    <a>Become a member</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-contacts">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="narrow-footer">
        <Row className="py-4 py-sm-5 col-12 mx-auto" justify="space-between">
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={7}
            style={{
              fontSize: 18,
              color: "#fff",
              textAlign: "center",
            }}
            className="mb-3 mb-sm-0"
          >
            <p>
              <a href="#">Emerge</a> &#169; {`${new Date().getFullYear()}`}. All
              Rights Reserved.
            </p>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={12}
            lg={7}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>SOCIALS</p>
            <div
              style={{
                height: 1,
                width: 40,
                backgroundColor: "grey",
                margin: "0 16px",
              }}
            ></div>

            {/* Light Social Icons */}
            <SocialIcons className="light-social-icons" />
          </Col>
        </Row>
      </div>
    </StyledFooter>
  );
};

export default FooterContent;
