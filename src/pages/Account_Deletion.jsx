import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

const Loader = () => (
  <div className="loader">
    <div className="spinner"></div>
  </div>
);

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return "All fields are required!";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      return "Please enter a valid email address!";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage("");
  
    const formError = validateForm();
    if (formError) {
      setError(formError);
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch("https://admin.oncabglobal.com/api/contact_us", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSuccessMessage("Account deletion request submitted successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Error submitting form: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <Helmet title="Account Deletion">
      <CommonSection title="Account Deletion" />
      <section>
        <Container>
          <Col lg="12" md="12">
            <h3 className="fw-bold mb-4">In App Mobile App Account Deletion Instructions</h3>
            <ol>
              <li>Open the app on your mobile device.</li>
              <li>Go to "menu" located in the top left, navigation to settings.</li>
              <li>Navigate to "Delete Account".</li>
              <li>Tap the "Delete Account" button".</li>
              <li>Confirm the deletion by tapping "Yes."</li>
              <li>Your deletion request will be processed.</li>
              <li>Your Account and Data will be Delete after 15days.</li>
              <li>If you change your mind within 15 days, contact support to cancel the deletion request.</li>
            </ol>
            <p style={{ color: "red" }}>
              * Please note that once the 15-day period has passed, your account will be permanently deleted.
            </p>
          </Col>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Delete Account And Data By This Form</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>

              {isSubmitting && <Loader />}
              {error && <div className="error-message" style={{color:"red"}}>{error}</div>}
              {successMessage && <div className="success-message" style={{color:"green"}}>{successMessage}</div>}
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>

                <div>
                  <h6 className="mb-0 fs-6">office:</h6>
                  <p className="section__description mb-0">
                    A-18 3rd Floor, Humera Centre Nursery, Shahrah e Faisal, Karachi, Pakistan
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+92 21 33517981</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">support@oncabglobal.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
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
