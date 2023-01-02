import "./footer.css";

import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div id="footer">
      <Nav defaultActiveKey="/home" as="ul" id="foot-nav">
        <Nav.Item as="li">
          <Nav.Link href="/home" id="img-footer">
            <div className="img-footer"></div>Coffee house
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Our coffee</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">For your pleasure</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="imgLogoDarck"></div>
    </div>
  );
};

export default Footer;
