import React, { useState } from 'react'
import * as emailjs from "emailjs-com";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Contact.css'

export const Contact = () => {

  const YOUR_EMAIL = "castioniezequiel@gmail.com"
  const YOUR_LINKEDIN = "https://linkedin.com/in/castioniezequiel"
  const description = <>Send me a message if you want to contact me, or let me know what you think. I'm open to listen any job offer, or just have a friendly talk!</>

  const YOUR_SERVICE_ID = "service_v3r7cn8"
  const YOUR_TEMPLATE_ID = "template_g68nzi9"
  const YOUR_USER_ID = "X7mle8z9EW3CxcEet"

  const [formData, setFormdata] = useState({
    title: "",
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        templateParams,
        YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            title: 'SUCCESS!',
            loading: false,
            alertmessage: "Thank you for your message. We'll be in touch soon",
            variant: "success",
            show: true,
            message: ''
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            title: `ERROR!`,
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className='contact-container'>

      <Container>

        <meta charSet="utf-8" />
        <title> Contact</title>
        <meta name="description" content={description} />
        <Row className="sec_sp">
          <Col lg="12">

            {!formData.loading &&
              <Alert show={formData.show} variant={formData.variant}>
                <Alert.Heading>{formData.title}</Alert.Heading>
                <p>
                  {formData.alertmessage}
                </p>
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setFormdata({ show: false })} variant={formData.variant === 'success' ? "outline-success" : "outline-danger"}>
                    Close
                  </Button>
                </div>
              </Alert>
            }

            <h3 className="color_sec py-4">Get in touch!</h3>
          </Col>

          <Col lg="5" className="mb-5">
            <address>
              <strong><FaRegEnvelope></FaRegEnvelope> Email:</strong>{" "}
              <a href={`mailto:${YOUR_EMAIL}`}>
                {YOUR_EMAIL}
              </a>
              <br />
              <strong><FaLinkedin></FaLinkedin> Linkedin: </strong>
              <a href={YOUR_LINKEDIN} target='_blank'>
                Ezequiel Guido Castioni
              </a>
              <br />
              <br />
            </address>
            <p>{description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button style={{ position: "flex", float: "right" }} className="btn btn-info" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>

    </div>
  )
}
