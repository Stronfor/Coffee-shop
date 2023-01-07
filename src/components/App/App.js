import { Component } from "react";

import Header from "../header/header";
import Content from "../content/content";
import Footer from "../footer/footer";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <Content />
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
