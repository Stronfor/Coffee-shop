import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ourBest.css";

const OurBest = () => {
  return (
    <div className="ourBest">
      <h4> Our best</h4>
      <div className="containerOurBest">
        <Row id="best">
          <Col className="col">
            <div className="goods-img"></div>
            <p className="goods-name">Solimo Coffee Beans 2 kg</p>
            <p className="goods-price">10.73$</p>
          </Col>
          <Col className="col">
            <div className="goods-img"></div>
            <p className="goods-name">Presto Coffee Beans 1 kg</p>
            <p className="goods-price">15.99$</p>
          </Col>
          <Col className="col">
            <div className="goods-img"></div>
            <p className="goods-name">AROMISTICO Coffee 1kg</p>
            <p className="goods-price">6.99$</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurBest;
