import Head from "next/head";
import { Row, Col } from "antd";
import HomeCard from "../src/components/cards/homeCards";
import { cardImage } from "../src/images";
import Slider from "react-slick";

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
      <div style={{ width: 300, height: 300 }}>
        <Slider {...settings}>
          <div>
            <div
              style={{ backgroundImage: `url(${cardImage})`, width: 300, height: 300 }}
            ></div>
            <h3>1</h3>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${cardImage})`, width: 300, height: 300 }}
            ></div>
            <h3>2</h3>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${cardImage})`, width: 300, height: 300 }}
            ></div>
            <h3>3</h3>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${cardImage})`, width: 300, height: 300 }}
            ></div>
            <h3>4</h3>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${cardImage})`, width: 300, height: 300 }}
            ></div>
            <h3>5</h3>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${cardImage})`, width: 300, height: 300 }}
            ></div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
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
