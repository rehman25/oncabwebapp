import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/all-images/logo-img/logo.png";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/Privacy_Policy",
    display: "Privacy Policy",
  },
  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="footer__logo-container d-flex align-items-center">
              <div className="logo">
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <img src={logo} alt="Logo" className="logo" />
                </Link>
              </div>
              <h1 className="footer__logo-heading">OnCab Global</h1>
            </div>
            <p className="footer__logo-content">
              At OnCab Global, we believe in making transportation easy,
              reliable, and enjoyable. Join thousands of happy riders who trust
              us for their daily journeys. Download the app today and experience
              the future of transportation.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">
                A-18 3rd Floor, Humera Centre Nursery,
                <br /> Shahrah e Faisal, Karachi Pakistan
              </p>
              <p className="office__info">Phone:  +92 21 33517981 </p>
              <p className="office__info">Email: support@OnCabGlobal.com</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">
                Subscribe to our newsletter
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, OnCab Global. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
