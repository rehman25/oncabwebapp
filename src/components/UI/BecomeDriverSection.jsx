import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="Toyota Offer" className="w-100 img-fluid" />
          </Col>

          <Col lg="6" md="6" sm="12" className="text-center text-md-left">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
