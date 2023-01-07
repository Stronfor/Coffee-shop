import AboutUs from "../aboutUs/aboutUs";
import OurBest from "../ourBest/ourBest";

import { Row, Col } from "react-bootstrap";

const Content = () => {
  const data = [
    {
      goodsName: "Solimo Coffee Beans 2 kg",
      price: 10.73,
      number: 1,
      name: "solimo",
      id: 1,
    },
    {
      goodsName: "Presto Coffee Beans 1 kg",
      price: 15.99,
      number: 2,
      name: "presto",
      id: 2,
    },
    {
      goodsName: "AROMISTICO Coffee 1kg",
      price: 6.99,
      number: 3,
      name: "aromistico",
      id: 3,
    },
  ];

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <AboutUs />
          </Col>
        </Row>
        <Row>
          <Col>
            <OurBest dataServ={data} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Content;
