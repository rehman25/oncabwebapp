import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  At OnCab Global, your safety is our top priority. We are
                  committed to offering safe, reliable, and comfortable ride
                  solutions for all our passengers. Every trip with us is
                  designed to provide peace of mind, from the moment you book
                  your ride to the time you reach your destination.
                </p>

                <p className="section__description">
                  Our drivers undergo rigorous background checks and extensive
                  training to ensure a safe driving experience. Each vehicle is
                  regularly inspected and maintained, meeting the highest safety
                  standards. We also implement real-time GPS tracking, allowing
                  you to share your ride status with loved ones, ensuring added
                  security on every journey.
                </p>
                <p className="section__description">
                  Whether you're commuting to work, catching a late-night
                  flight, or traveling with family, you can trust OnCab Global
                  to provide a smooth, secure, and safe ride every time. With
                  24/7 availability and enhanced safety protocols, we are
                  committed to getting you where you need to go—safely and
                  reliably.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+92 21 33517981</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          {/* <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row> */}
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
