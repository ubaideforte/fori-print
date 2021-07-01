import Head from "next/head";
import { Input, Row, Col } from "antd";
import { FaSearch } from "react-icons/fa";
import HomeCard from "../src/components/cards/homeCards";
import { cardImage } from "../src/images";

const cardData1 = [
  { price: "BUY 5 @ 150", itemName: "letterheads", cardImage },
  { price: "BUY 5 @ 150", itemName: "letterheads", cardImage },
  { price: "BUY 5 @ 150", itemName: "letterheads", cardImage },
];

const cardData2 = [
  {
    price: "BUY 5 @ 150",
    itemName: "letterheads",
    cardImage,
    sub: "lorem ipsum dolor de sumst i dna amp sau mnu pit vrilo",
  },
  {
    price: "BUY 5 @ 150",
    itemName: "letterheads",
    cardImage,
    sub: "lorem ipsum dolor de sumst i dna amp sau mnu pit vrilo",
  },
  {
    price: "BUY 5 @ 150",
    itemName: "letterheads",
    cardImage,
    sub: "lorem ipsum dolor de sumst i dna amp sau mnu pit vrilo",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fori print | Home</title>
      </Head>
      <Row justify="space-around" className="col-9 m-auto" gutter={[24, 24]}>
        {cardData1.map((item, index) => (
          <Col span={8} key={index}>
            <HomeCard cardData={item} />
          </Col>
        ))}
      </Row>

      <div className="my-5">More to explore</div>

      <Row justify="space-around" className="col-9 m-auto" gutter={[24, 24]}>
        {cardData2.map((item, index) => (
          <Col span={12} key={index}>
            <HomeCard cardData={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
