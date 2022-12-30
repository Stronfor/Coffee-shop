import "./header.css";

import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div className="header">
      <Nav defaultActiveKey="/home" as="ul" className="">
        <Nav.Item as="li" className="logo">
          <Nav.Link href="/home">
            <div id="myImg"></div>
            Coffee house
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Our coffee</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">For your pleasure</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Eerything You Love About Coffee</h1>
      <div className="imgLogo"></div>
      <h4>We makes every day full of energy and taste</h4>
      <h4>Want to try our beans?</h4>
      <div type="button" className="moreBtn">
        More
      </div>
    </div>
  );
};

export default Header;
