import { Carousel } from "react-responsive-carousel";
import { cardImage1, cardImage2, cardImage3, cardImage4 } from "../src/images";
import { Row, Col } from "antd";

const Order = () => {
  return (
    <>
      <div className="col-9 mx-auto my-4 fw-bold">Home / Cards / Order</div>
      <Row className="col-9 mx-auto position-relative">
        <Col span={12}>
          <div style={{ width: 400, position: "sticky", top: 60 }}>
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

        <Col span={12} style={{ height: "180vh" }}>
          <div
            className="order"
            style={{
              width: "-webkit-fill-available",
              border: "1px solid #acacac",
              backgroundColor: "#F5F5F5",
              padding: 16,
            }}
          >
            <p>
              Park Avenue shirts are ideal for premium office wear. Personalise your
              shirts with your text or logo and create a premium identity for your brand.
            </p>

            <ul>
              <li>
                <p>
                  <b>Brand:</b> Park Avenue
                </p>
              </li>
              <li>
                <p>
                  <b>Material:</b> 100 % cotton woven fabric.
                </p>
              </li>
              <li>
                <p>
                  <b>Gender:</b> Men
                </p>
              </li>
              <li>
                <p>
                  <b>Chest Pocket:</b> Left
                </p>
              </li>
              <li>
                <p>
                  <b>Sleeves:</b> Full-sleeves
                </p>
              </li>
              <li>
                <p>
                  <b>Country of Origin:</b> Pakistan
                </p>
              </li>
            </ul>

            <p>CustomizationTechnology: Embriodery</p>

            <p>Available Colors:</p>
            <div style={{ backgroundColor: "#fce56a", height: 24, width: 24 }} />

            <p>Size Available:</p>
            <div>32 34 36 38</div>

            <div
              style={{
                backgroundColor: "#bcde34",
                width: 240,
                padding: "12px 0",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Get Started
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ height: 200 }}></div>
    </>
  );
};

export default Order;
