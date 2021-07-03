import Head from "next/head";
import { Row, Col } from "antd";
import HomeCard from "../src/components/cards/homeCards";
import { cardImage } from "../src/images";
import Slider from "react-slick";
import Divider from "../src/components/divider";
import FooterWrapper from "../src/components/footer/footerWrapper";
const cardData1 = [
  { price: "BUY 5 @ 150", itemName: "letterheads", cardImage },
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

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fori print | Home</title>
      </Head>

      <Divider>FEATURED PRODUCTS</Divider>
      <Row justify="left" className="col-8 m-auto" gutter={[24, 24]}>
        {cardData1.map((item, index) => (
          <Col span={8} key={index}>
            <HomeCard cardData={item} />
          </Col>
        ))}
      </Row>

      <Divider>NEW LAUNCHES</Divider>
      <Row justify="left" className="col-8 m-auto" gutter={[24, 24]}>
        {cardData1.map((item, index) => (
          <Col span={6} key={index}>
            <HomeCard cardData={item} />
          </Col>
        ))}
      </Row>

      <Divider>MORE TO EXPLORE</Divider>
      <Row justify="left" className="col-8 m-auto" gutter={[24, 24]}>
        {cardData2.map((item, index) => (
          <Col span={12} key={index}>
            <HomeCard cardData={item} />
          </Col>
        ))}
      </Row>
      <FooterWrapper />
    </div>
  );
}
