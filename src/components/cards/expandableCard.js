import React, { useState } from "react";
import { PlusOutlined, CloseOutlined } from "../icons";
import { Row, Col } from "antd";

const ECard = (props) => {
  const { cardTitle, cardDescription, link } = props;
  const [display, setDisplay] = useState("none");
  return (
    <div style={{ backgroundColor: "#f4f4f4" }} className="py-5 px-4">
      <Row justify="space-between" align="middle">
        <Col span={20}>
          <p className="heading-9 font-weight-bold m-0 text-truncate">
            {cardTitle}
          </p>
        </Col>
        <Col>
          <div
            onClick={() =>
              display === "none" ? setDisplay("block") : setDisplay("none")
            }
            style={{
              cursor: "pointer",
              width: 32,
              height: 32,
              borderRadius: "50vmax",
              border: "2px solid #21262C",
              color: "#21262C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            {display === "block" ? <CloseOutlined /> : <PlusOutlined />}
          </div>
        </Col>

        <Col span={24}>
          <p style={{ display, color: "#78757b" }} className="mt-4 mb-0">
            {cardDescription}
          </p>

          {link && (
            <a style={{ color: "#21262C", display }} href={link}>
              Click for more
            </a>
          )}
        </Col>
      </Row>
    </div>
  );
};

const ExpandableCards = () => {
  return (
    <>
      {expandableCardData.map((item, index) => (
        <div className="my-3">
          <ECard key={`expandable-card-${index + 1}`} {...item} />
        </div>
      ))}
    </>
  );
};

export default ExpandableCards;

const expandableCardData = [
  {
    cardTitle: "How to become member of Emerge?",
    cardDescription:
      "You can go to this link and fill out details for becoming part of the movement; Emerge and start participating.",
    link: "https://emergeforward.com/application",
  },
  {
    cardTitle: "How to contribute to Emerge Knowledge System?",
    cardDescription:
      "You can contribute through participating in ongoing projects of Emerge like Prospective, Dialogue, EYP etc. Becoming a member will not only make you part of the movement formally but will enhance the message of Emerge among masses.",
    link: "https://emergeforward.com/application",
  },
  {
    cardTitle: "How to get informed about happenings at Emerge?",
    cardDescription:
      "You can subscribe to our email list for all updates about happenings at Emerge.",
  },
];
