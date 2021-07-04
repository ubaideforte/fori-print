import { Carousel } from "react-responsive-carousel";
import { cardImage1, cardImage2, cardImage3, cardImage4 } from "../src/images";
import { Row, Col } from "antd";

const Order = () => {
  return (
    <>
      <div className="col-9 mx-auto my-4 fw-bold">Home / Cards / Order</div>
      <Row className="col-9 mx-auto ">
        <Col span={12}>
          <div style={{ width: 400 }}>
            <Carousel infiniteLoop autoPlay>
              <div>
                <img alt="card-image" src={cardImage1} className="img-fluid" />
              </div>

              <div>
                <img alt="card-image" src={cardImage2} className="img-fluid" />
              </div>

              <div>
                <img alt="card-image" src={cardImage3} className="img-fluid" />
              </div>

              <div>
                <img alt="card-image" src={cardImage4} className="img-fluid" />
              </div>
            </Carousel>
          </div>
        </Col>

        <Col span={12}>
          <div
            className="order"
            style={{
              width: "-webkit-fill-available",
              border: "1px solid black",
              height: 250,
            }}
          ></div>
        </Col>
      </Row>
    </>
  );
};

export default Order;
