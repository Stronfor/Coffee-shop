import Header from "../header/header";
import AboutUs from "../aboutUs/aboutUs";
import OurBest from "../ourBest/ourBest";
import Footer from "../footer/footer";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
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
            <OurBest />
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

export default App;
