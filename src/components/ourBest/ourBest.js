import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ourBest.css";
import aromistico from "./ourBestImg/aromistico.png";
import presto from "./ourBestImg/presto.png";
import solimo from "./ourBestImg/solimo.png";

const OurBest = () => {
  const img = [solimo, presto, aromistico];

  const goodsImg = [
    {
      goodsName: "Solimo Coffee Beans 2 kg",
      price: 10.73,
      number: 1,
      name: "solimo",
    },
    {
      goodsName: "Presto Coffee Beans 1 kg",
      price: 15.99,
      number: 2,
      name: "presto",
    },
    {
      goodsName: "AROMISTICO Coffee 1kg",
      price: 6.99,
      number: 3,
      name: "aromistico",
    },
  ];

  const col = goodsImg.map(({ goodsName, price, number, name }) => {
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
