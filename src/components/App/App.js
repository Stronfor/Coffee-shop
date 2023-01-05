import { Component } from "react";

import Header from "../header/header";
import AboutUs from "../aboutUs/aboutUs";
import OurBest from "../ourBest/ourBest";
import Footer from "../footer/footer";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      height: 260,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
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
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
