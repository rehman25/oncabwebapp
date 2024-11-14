import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=61562324425545&mibextid=ZbWKwL",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/oncabpk/?igsh=MTBpbHlnZWc1ZXBvYg%3D%3D",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.linkedin.com/company/oncab/?originalSubdomain=pk",
    icon: "ri-linkedin-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                
                <div>
                  <h6 className="mb-0 fs-6">office:</h6>
                  <p className="section__description mb-0">A-18 3rd Floor, Humera Centre Nursery, Shahrah e Faisal, Karachi, Pakistan</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+92 21 33517981</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">support@OnCabGlobal.com</p>
                </div>

                {/* Add account deletion link */}
                <div className="d-flex align-items-center gap-2 mt-3">
                  <h6 className="mb-0 fs-6">Account Deletion:</h6>
                  <Link
                    to="/account_deletion"  
                  >
                    Request Account Deletion
                  </Link>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
