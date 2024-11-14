import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to OnCab Global</h2>
              <p className="section__description">
                At OnCab Global, we provide seamless, affordable, and reliable
                transportation services. Whether you’re commuting to work,
                heading to the airport, or exploring the city, our rides are
                designed to give you a comfortable experience every time.
              </p>
              <h2 className="section__title">Why Choose OnCab Global?</h2>
              <p className="section__description">
                <b>Affordable Fares:</b> Get around the city without breaking
                the bank. Our fares are transparent and competitive, ensuring
                you always get value for money.
              </p>
              <p className="section__description">
                <b>Reliable Service:</b> No more waiting around. Book your ride
                in just a few taps, and our drivers will be there on time.
              </p>
              <p className="section__description">
                <b>Safe & Secure:</b> Your safety is our top priority. All our
                drivers are vetted, and our vehicles are regularly inspected to
                ensure your peace of mind.
              </p>
              <p className="section__description">
                <b>24/7 Availability:</b> Day or night, OnCab Global is always
                ready to serve you. Whether it's an early morning flight or a
                late-night outing, we've got you covered.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="About OnCab Global" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
