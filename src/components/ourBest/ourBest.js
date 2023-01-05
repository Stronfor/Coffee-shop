import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ourBest.css";
import aromistico from "./ourBestImg/aromistico.png";
import presto from "./ourBestImg/presto.png";
import solimo from "./ourBestImg/solimo.png";

const OurBest = ({ dataServ }) => {
  const img = [solimo, presto, aromistico];

  const col = dataServ.map(({ goodsName, price, number, name }) => {
    return (
      <Col className="col">
        <img className="goods-img" src={img[number - 1]} alt={name} />
        <p className="goods-name">{goodsName}</p>
        <p className="goods-price">{`${price}$`}</p>
      </Col>
    );
  });

  return (
    <div className="ourBest">
      <h4> Our best</h4>
      <div className="containerOurBest">
        <Row id="best">{col}</Row>
      </div>
    </div>
  );
};

export default OurBest;
