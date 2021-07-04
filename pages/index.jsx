import Head from "next/head";
import { Row, Col } from "antd";
import HomeCard from "../src/components/cards/homeCards";
import { cardImage } from "../src/images";
import Divider from "../src/components/divider";
import { footerBanner, homepageBanner, cart, product, money } from "../src/images";
import { IoIosArrowForward } from "react-icons/io";

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

      <div className="text-center">
        <img
          alt="home-banner"
          src={homepageBanner}
          style={{
            margin: "32px auto",
          }}
          className="img-fluid"
        />
      </div>
      <Row className="m-auto col-8" gutter={[48, 48]}>
        <Col span={8}>
          <Row gutter={[4, 4]} align="middle" justify="space-between">
            <Col>
              <img alt="cart" src={cart} className="img-fluid" width={40} />
            </Col>
            <Col>
              <p className="m-0">
                Even Low Quantities <br /> Best Prices
              </p>
            </Col>
            <Col>
              <IoIosArrowForward />
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row gutter={[4, 4]} align="middle" justify="space-between">
            <Col>
              <img alt="cart" src={product} className="img-fluid" width={40} />
            </Col>
            <Col>
              <p className="m-0">2000 products and design</p>
            </Col>
            <Col>
              <IoIosArrowForward />
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row gutter={[4, 4]} align="middle" justify="space-between">
            <Col>
              <img alt="cart" src={money} className="img-fluid" width={40} />
            </Col>
            <Col>
              <p className="m-0">
                100% satisfaction or <br /> Money back
              </p>
            </Col>
            <Col>
              <IoIosArrowForward />
            </Col>
          </Row>
        </Col>
      </Row>

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

      <Divider>SAFETY MEASURES</Divider>
      <div
        style={{
          backgroundImage: `url(${footerBanner})`,
          height: "30vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "32px auto",
          width: "60vw",
        }}
      />
    </div>
  );
}
